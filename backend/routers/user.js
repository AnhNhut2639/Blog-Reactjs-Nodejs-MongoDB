const express = require("express");
const controllers = require("../controllers");
const UserRouter = express.Router();
let check = require("../middlewares/authencation");

// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage: storage });

UserRouter.get("/trigger/:id", controllers.user.usertest);
UserRouter.get("/test", controllers.user.usertest2);
UserRouter.get("/data", controllers.user.userData);
UserRouter.post("/register", controllers.user.register);

UserRouter.post("/newpost", controllers.user.newPost);
UserRouter.get("/newsfeeds", controllers.user.newsFeeds);

UserRouter.get("/home", check.authen, controllers.user.home);

UserRouter.post("/cmt", check.authen, controllers.user.inserComments);

UserRouter.get("/getdatacmt", controllers.user.getDataCommnet);
UserRouter.post("/likepost", controllers.user.likePost);
UserRouter.get("/getlikelist", check.authen, controllers.user.getLikeList);
UserRouter.get("/getusers", check.authen, controllers.user.getUsers);
UserRouter.post("/unlike", controllers.user.unLike);
UserRouter.post("/buttonlike", check.authen, controllers.user.handleButtonLike);
UserRouter.post(
  "/buttonunlike",
  check.authen,
  controllers.user.handleUnLikeButton
);

module.exports = UserRouter;
