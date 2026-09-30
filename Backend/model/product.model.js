const { Schema, default: mongoose } = require("mongoose");
const { applyTimestamps } = require("./user.model");

const productSchema = new Schema({
    productName:{
        type:"string",
        required:(true,"Invalid name")
    },
    productQty:{
        type:Number,
        required: (true,"Invalid Quantity"),
    },
    productBrand:{
        type:"string",
        required: true,
        default: false
    },
    productPrize:{
        type:Number,
        required: (true,"Enter productPrize")

    },
    productDescription:{
        type:"string",
        required: true,
        default: false
    },
    
},{
 timestamps:true,
}

)

const productModel = mongoose.model("product",productSchema);
module.exports = productModel;
