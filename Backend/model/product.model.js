const { Schema, default: mongoose } = require("mongoose");

const productSchema = new Schema({
    productName:{
        type:"string",
        required:true,
    },
    productQty:{
        type:Number,
        required: true,
    },
    productBrand:{
        type:"string",
        required: true,
        default: false
    },
    
})

const productModel = mongoose.model("product",productSchema);
module.exports = productModel;
