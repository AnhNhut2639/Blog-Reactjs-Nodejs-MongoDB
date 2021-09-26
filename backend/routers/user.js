const express = require("express");
const controllers = require("../controllers");
const UserRouter = express.Router();
// let check = require("../middlewares/authencation");

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
UserRouter.get("/data", controllers.user.userData);
UserRouter.post("/register", controllers.user.register);

UserRouter.post("/newpost", controllers.user.newPost);
UserRouter.get("/newsfeeds", controllers.user.newsFeeds);

module.exports = UserRouter;
