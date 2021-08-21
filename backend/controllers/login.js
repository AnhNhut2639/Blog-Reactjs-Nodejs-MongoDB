const usersModel = require("../models/UserModel");

async function login(req, res) {
  const users = await usersModel.find({});

  return res.json(users);
}

async function insertUser(req, res) {
  let username = req.body.username;
  let password = req.body.password;
  console.log(`username:${username} && password:${password}`);
  usersModel.create({
    username: username,
    password: password,
  });
  res.redirect("/data");

  console.log("you've created Account Succesfully !");
}

module.exports = {
  login,
  insertUser,
};
