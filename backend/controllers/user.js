const usersModel = require("../models/UserModel");
const { cloudinary } = require("../utils/cloudinary");

function usertest(req, res) {
  return res.json({
    hello: "cc",
  });
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
module.exports = {
  usertest,
  register,
  userData,
};
