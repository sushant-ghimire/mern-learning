const { Router } = require("express");
const registerUserControllor = require("../controller/auth.controllor");
const authRouterPost = Router();

authRouterPost.post("/register",registerUserControllor)

module.exports = authRouterPost;
