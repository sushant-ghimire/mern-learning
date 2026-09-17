const { default: mongoose } = require("mongoose");
const productModel = require("../model/product.model");

const createProduct = async(req, res)=>{
 try {
    const userProduct = req.body;
    const dataCreate = await productModel.create(userProduct);
    res.status(201).json({
        data : dataCreate,
        message : "Product created successfully"
    })
 } catch (error) {
    console.log("mission failed")
 }
}

module.exports = createProduct;