const { Router } = require("express");
const {register,loginController, listUSerController, updateUser, listSpecialUSer, deleteUser} = require("../controller/user.controller");

const authRouter = Router();
authRouter.post("/register", register)
authRouter.post("/login",loginController)
authRouter.get("/list",listUSerController)
authRouter.patch("/update/:id",updateUser)
authRouter.get("/listSpecial/:id",listSpecialUSer)
authRouter.post("/delete/:id",deleteUser)



module.exports = authRouter