const { user } = require("../data/user")

exports.login = (req, res,)=>{
 const userInfo= user;
 const email="sushantghimire098@gmail.com"  // assuming the data from frontend
 const pass="123";

 if(email === userInfo.email && pass === userInfo.password){
    console.log("user is AUTHENTICATED")
 }else{
    throw new Error("Invalid email and password");
    
 }
}

const register = (req, res) => {

}


//