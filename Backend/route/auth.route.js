const { Router } = require("express");
const {registerUserControllor,loginController} = require("../controller/auth.controllor");
const authRouterPost = Router();

authRouterPost.post("/register",registerUserControllor);
authRouterPost.post("/login",loginController)

module.exports = authRouterPost;
