const mongoose = require("mongoose")

const connectDb=()=>{
 mongoose.connect("mongodb://localhost:27017/")
 console.log("connected")
}

module.exports = connectDb