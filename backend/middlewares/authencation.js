const usersModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");

module.exports.authen = async function (req, res, next) {
  const result = jwt.decode(req.cookies.accessToken, process.env.MY_SERECT_KEY);
  if (result) {
    let id = result.payload.id;

    const user = await usersModel.findOne({ id: id });

    res.locals.user = user;

    next();
  } else {
    console.log("khong co jwt tai midllewares");
  }
};
