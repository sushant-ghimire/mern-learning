const mongoose = require("mongoose");


const connectDb = async() => {
    try{
 await mongoose.connect("mongodb://localhost:27017/sushant");
  console.log("mongoose connected sucessfully");
}catch(Error){
    // console.log(Error);
    console.log("database connection failed")
}
}


module.exports = connectDb;
