const usersModel = require("../models/UserModel");
const postsModel = require("../models/PostsModel");
const { cloudinary } = require("../utils/cloudinary");
const jwt = require("jsonwebtoken");
const moment = require("moment");

async function usertest(req, res) {
  const id = req.params.id;
  const userdata = await usersModel.findOne({ id: id });
  return res.json(userdata);
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
  const posts = await postsModel
    .find({})
    .populate("idUser")
    .then((data) => {
      data.sort(function (a, b) {
        return new Date(b.datePosted) - new Date(a.datePosted);
      });
      const arr = data.map((info) => {
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
          likeCounts: info.likeCounts,
          _id: info._id,
          image: info.image,
          content: info.content,
          idPost: info.idPost,
          likeList: info.likeList,
          username: info.idUser.username,
          avatar: info.idUser.avatar,
          fullname: info.idUser.fullname,
          datePosted: datetime,
        };
      });

      res.json(arr);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  usertest,
  register,
  userData,
  newPost,
  newsFeeds,
};
