const usersModel = require("../models/UserModel");

async function login(req, res) {
  const users = await usersModel.find({});

  return res.json(users);
}

module.exports = {
  login,
};
