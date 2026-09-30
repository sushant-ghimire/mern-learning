const mongoose = require("mongoose");


const connectDb = async() => {
    try{
 await mongoose.connect(process.env.mongo_db_Url);   //.env file bata aaako
  console.log("mongoose connected sucessfully");
}catch(Error){
    // console.log(Error);
    console.log("database connection failed")
}
}


module.exports = connectDb;
