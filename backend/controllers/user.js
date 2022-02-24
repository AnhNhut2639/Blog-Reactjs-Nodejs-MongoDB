const usersModel = require("../models/UserModel");
const postsModel = require("../models/PostsModel");
const cmtsModels = require("../models/Comments");
const { cloudinary } = require("../utils/cloudinary");
const jwt = require("jsonwebtoken");
const moment = require("moment");

async function usertest(req, res) {
  const id = req.params.id;
  const userdata = await usersModel.findOne({ id: id });
  return res.json(userdata);
}
async function usertest2(req, res) {
  return res.json({ a: "Hello world !" });
}

async function userData(req, res) {
  const users = await usersModel.find({});
  return res.json(users);
}

async function register(req, res) {
  try {
    const fileStr = req.body.data;
    const username = req.body.username;
    const password = req.body.password;
    const fullname = req.body.fullname;
    const description = req.body.description;
    const email = req.body.email;

    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "dev_setups",
    });

    const avatar = uploadedResponse.secure_url;

    usersModel.create({
      username: username,
      password: password,
      fullname: fullname,
      description: description,
      email: email,
      avatar: avatar,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "wrong" });
  }
}

async function newPost(req, res) {
  let token = req.body.token;

  const result = jwt.decode(token, process.env.MY_SERECT_KEY);
  if (result) {
    let id = result.payload.id;
    var user = await usersModel.findOne({ id: id }, { id: 1, username: 1 });
  }
  try {
    const content = req.body.content;
    const fileImg = req.body.img;
    const feedsResponse = await cloudinary.uploader.upload(fileImg, {
      upload_preset: "feeds_img",
    });
    const feedsImg = feedsResponse.secure_url;
    postsModel.create({
      idUser: user._id,
      image: feedsImg,
      content: content,
    });
    console.log("you've added a collection");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "upload failed" });
  }
}

async function newsFeeds(req, res) {
  const posts = await postsModel.find({}).populate("idUser");

  const newPosts = posts.map((info) => {
    var date = info.datePosted;
    var datetime = moment(date).fromNow();
    var x = datetime.split(" ").slice(1, 2);

    if (
      x == "days" ||
      x == "day" ||
      x == "month" ||
      x == "months" ||
      x == "year" ||
      x == "years"
    ) {
      datetime = moment(date).format("MMMM D, YYYY");
    }

    return {
      likeCounts: info.likeList.length,
      _id: info._id,
      image: info.image,
      content: info.content,
      idPost: info.idPost,
      likeList: info.likeList,
      username: info.idUser.username,
      avatar: info.idUser.avatar,
      fullname: info.idUser.fullname,
      datePosted: datetime,
      countCmt: 0, //tạo 1 biến count để nhận vào kết quả đếm cmt ở nested loop
    };
  });

  const postCmt = await postsModel.aggregate([
    {
      $lookup: {
        from: "comments",
        localField: "idPost",
        foreignField: "idPost",
        as: "cmtsInPost",
      },
    },
  ]);

  const postsHaveCmt = postCmt.map((item) => {
    return {
      idPost: item.idPost,
      cmtCount: item.cmtsInPost.length,
    };
  });

  var finallyArr = [];
  for (let i = 0; i < postsHaveCmt.length; i++) {
    let x = postsHaveCmt[i].idPost;
    for (let y = 0; y < newPosts.length; y++) {
      let z = newPosts[y].idPost;
      if (x === z) {
        newPosts[y].countCmt = postsHaveCmt[i].cmtCount;
        finallyArr.push(newPosts[y]);
      }
    }
  }

  const sortedArr = finallyArr.reverse();

  return res.json(sortedArr);
}

async function getLikeList(req, res) {
  const idOwn = res.locals.user.id;

  const listsLike = await usersModel.find({ id: idOwn }, { listLikes: 1 });
  const likeList = [];
  for (let item of listsLike) {
    for (let subitem of item.listLikes) {
      likeList.push(subitem);
    }
  }

  res.json(likeList);
}

async function home(req, res) {
  const idOwn = res.locals.user._id;
  const posts = await postsModel
    .find({ idUser: idOwn })
    .populate("idUser")
    .then((data) => {
      data.sort(function (a, b) {
        return new Date(b.datePosted) - new Date(a.datePosted);
      });

      const ownPosts = data.map((post) => {
        return {
          datePosted: post.datePosted,
          likeCounts: post.likeCounts,
          _id: post._id,
          image: post.image,
          content: post.content,
          idPost: post.idPost,
          likeList: post.likeList,
          idUser: post.idUser._id,
          imageUser: post.idUser.avatar,
          username: post.idUser.username,
        };
      });
      res.json(ownPosts);
    });
}

async function inserComments(req, res) {
  let idPost = req.body.idPost;
  let idOwn = res.locals.user._id;
  let contentCmt = req.body.content;

  cmtsModels.create({
    idUser: idOwn,
    idPost: idPost,
    content: contentCmt,
  });
  console.log("You have add a comment for post: ", idPost);
}

async function getDataCommnet(req, res) {
  const cmtPost = await cmtsModels
    .find({})
    .populate("idUser")
    .then((data) => {
      data.sort(function (a, b) {
        return new Date(b.dateComment) - new Date(a.dateComment);
      });

      const cmtArr = data.map((cmt) => {
        var date = cmt.dateComment;
        var datetime = moment(date).fromNow();
        var x = datetime.split(" ").slice(1, 2);
        if (
          x == "days" ||
          x == "day" ||
          x == "month" ||
          x == "months" ||
          x == "year" ||
          x == "years"
        ) {
          datetime = moment(date).format("MMMM D, YYYY");
        }
        return {
          dateComment: datetime,
          userAvatar: cmt.idUser.avatar,
          userCmt: cmt.idUser.username,
          contentCmt: cmt.content,
          idPostCmt: cmt.idPost,
        };
      });
      return res.json(cmtArr);
    });
}

async function likePost(req, res) {
  let fullname = req.body.fullName;
  let idUser = req.body.idUser;
  let idPost = req.body.idPost;

  await postsModel.updateOne(
    //Nếu dữ liệu thêm vào bị trùng thì sẽ không được add vào database
    {
      $and: [{ _id: idPost }, { "likeList.idLiker": { $ne: idUser } }],
    },
    {
      $addToSet: {
        likeList: {
          $each: [{ idLiker: idUser, usernameLiker: fullname }],
        },
      },
    }
  );
}

async function handleButtonLike(req, res) {
  let idUser = req.body.idUser;
  let idPost = req.body.idPost;

  await usersModel.updateOne(
    {
      $and: [{ id: idUser }, { "listLikes.idPost": { $ne: idPost } }],
    },
    {
      $addToSet: {
        listLikes: {
          $each: [{ idPost: idPost }],
        },
      },
    }
  );
}

async function getUsers(req, res) {
  let idOwn = res.locals.user.id;
  const users = await usersModel.find({ id: { $ne: idOwn } });
  users.sort(function (a, b) {
    return new Date(b.dateCreated) - new Date(a.dateCreated);
  });

  const list = users.map((user) => {
    return {
      username: user.username,
      fullName: user.fullname,
      avatar: user.avatar,
      id: user.id,
      followers: user.followers,
      following: user.following,
      dateCreated: moment(user.dateCreated).format("MMMM D, YYYY"),
    };
  });

  const listUsers = list.slice(0, 4);

  res.json(listUsers);
}

async function unLike(req, res) {
  let idPost = req.body.idPost;
  let idUser = req.body.idCurrentUser;

  await postsModel.updateMany(
    { _id: idPost },
    {
      $pull: {
        likeList: { idLiker: idUser },
      },
    }
  );
}

async function handleUnLikeButton(req, res) {
  let idPostLike = req.body.idPostLike;
  let idUser = req.body.idUser;
  await usersModel.updateMany(
    { id: idUser },
    {
      $pull: {
        listLikes: { idPost: idPostLike },
      },
    }
  );
}
module.exports = {
  usertest,
  register,
  userData,
  newPost,
  newsFeeds,
  home,
  inserComments,
  usertest2,
  getDataCommnet,
  likePost,
  getLikeList,
  getUsers,
  unLike,
  handleButtonLike,
  handleUnLikeButton,
};
