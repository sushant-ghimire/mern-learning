const { default: mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
    name:{
        type:"String",
        required:(true,"user name is required")
    },
    email:{
        type: "String",
        unique: (true,"email must be unique"),
        required:(true,"email name is required")
    },
    password:{
        type: "String",
        required:(true,"Password name is required")
    },
    isVerified:{
        type:"Boolean",
        required:true,
        default: false
    },
    gender:{
        type: "String",
        required: false
    }
    
})


const userModel = mongoose.model("user",userSchema)
module.exports = userModel;