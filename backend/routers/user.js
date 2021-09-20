const express = require("express");
const { user } = require("../controllers");
const controllers = require("../controllers");
const UserRouter = express.Router();

UserRouter.get("/", controllers.user.usertest);
UserRouter.get("/data", controllers.user.userData);
UserRouter.post("/register", controllers.user.register);

module.exports = UserRouter;
