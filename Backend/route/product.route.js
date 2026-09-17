const {Router}= require("express");
const createProduct = require("../controller/product.controller");
 const productRouter = Router();

 productRouter.post("/createProduct",createProduct);

 module.exports= productRouter;