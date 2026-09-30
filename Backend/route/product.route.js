const {Router}= require("express");
const {createProduct, listAllProduct, listSpecialProduct, updateProduct, listProduct, listSpecialProductQuerry, deleteProduct} = require("../controller/product.controller");
 const productRouter = Router();

 productRouter.post("/createProduct",createProduct);
 productRouter.get("/find",listAllProduct);
 productRouter.get("/",listProduct);
 productRouter.get("/id/:id",listSpecialProduct);
 productRouter.patch("/update/:id",updateProduct);
 productRouter.get("/id",listSpecialProductQuerry);
 productRouter.delete("/delete/:id",deleteProduct);


 module.exports= productRouter;