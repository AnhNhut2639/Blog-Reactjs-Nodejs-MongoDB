const usersModel = require("../models/UserModel");

async function login(req, res) {
  const users = await usersModel.find({});

  return res.json(users);
}

async function insertUser(req, res) {
  // let { id } = req.params;
  let username = req.body.username;
  let password = req.body.password;
  console.log(`username:${username} && password:${password}`);
}

module.exports = {
  login,
  insertUser,
};
