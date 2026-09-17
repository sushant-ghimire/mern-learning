const { Router } = require("express");
const register = require("../controller/user.controller");

const authRouter = Router();
// authRouter.post("/login", login);
authRouter.post("/register", register)


module.exports = authRouter