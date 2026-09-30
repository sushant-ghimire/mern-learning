const { default: mongoose } = require("mongoose");
const productModel = require("../model/product.model");
const { updateOne } = require("../model/user.model");

const createProduct = async(req, res)=>{
 try {
    const userProduct = req.body;
    const dataCreate = await productModel.create(userProduct);
    console.log("Data of product created")
    res.status(201).json({
      
        data : dataCreate,
        message : "Product created successfully"
    })
   } catch (error) {
    console.log("mission failed")
    res.status(500).json({
    message:"Error occured",
    error:error.message
      })
   }
}

const updateProduct = async(req,res)=>{
   try {
      const id = req.query.id;
      const data = req.body;
       const result = await productModel.findByIdAndUpdate(id,data,{
         new:true,
       })
      res.status(200).json({
         message:"updated successfully",
         data:result
      })
   } catch (error) {
      res.status(500).json({
         message:"updated not successfully",
         error:error.message
   })

}
}


const listAllProduct = async (req,res)=>{
try {
   const result   = await productModel.find({
   });
   res.status(200).json({
      message: "Product fetched successfully",
      data: result
   })
} catch (error) {
   console.log("i cannt find any data");
   res.status(500).json({
      message:"mission failed",
      error:error.message
   })
   
}
}

const listSpecialProduct = async(req,res)=>{
try {
   const id  =req.params.id;
   const result = await productModel.findById(id);

   res.status(200).json({
      message:"Producted featched succesfully",
      data: result
   })

} catch (error) {

   res.status(500).json({
      message:"Producted featched failed",
      error: error.message
   
   })
}
}

const listSpecialProductQuerry = async(req,res)=>{
try {
   const id  =req.query.id;
   const result = await productModel.findById(id);

   res.status(200).json({
      message:"Producted featched succesfully",
      data: result
   })

} catch (error) {

   res.status(500).json({
      message:"Producted featched failed",
      error: error.message
   
   })
}
}


const listProduct = async(req,res)=>{
try {
   const id  =req.body.id;
   const result = await productModel.findById(id);

   res.status(200).json({
      message:"Producted featched succesfully",
      data: result
   })

} catch (error) {

   res.status(500).json({
      message:"Producted featched failed",
      error: error.message
   
   })
}
}



const deleteProduct = async(req,res)=>{
   try {
      const id = req.params.id;
      const result = await productModel.findByIdAndDelete(id);
      if(!result){
      throw new Error(`product with id ${id} not found`)
      }

      res.status(200).json({
      message:"deleted succesfully",
      data: result
   })
   } catch (error) {
     
      res.status(500).json({
      message:"deleted failed",
      error: error.message
   
   })
      
   }
}
module.exports = {createProduct,listAllProduct,listSpecialProduct,updateProduct,listProduct,listSpecialProductQuerry,deleteProduct}