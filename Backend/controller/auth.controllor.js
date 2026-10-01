const authmodel = require("../model/auth.schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUserControllor = async(req, res)=>{
try {
    let data = req.body;
  
    const hashpassword = await bcrypt.hash(data.password,10) 
    
    data= {
      ...data,
      password: hashpassword
  
    };
  


    const result = await authmodel.create(data);
     res.status(201).json({
    message: "user registered successfully"
  })
} catch (error) {
    res.status(500).json({
    message:" Internal Server Error occured",
    error:error.message
   })
}
}


const loginController = async (req, res)=>{
  try {
    const data = req.body;
    
   const isValidEmail = await authmodel.findOne({
    where:{email:data.email}
   })

   if(!isValidEmail){
    throw new ERROR("No User registered from this Email")
   }

   const isValidPassword = await bcrypt.compare(data.password,isValidEmail.password);

   if(!isValidPassword){
    throw new ERROR ("Invalid Password");
   }

   const payload = {
    id:  isValidEmail.id,
    email : isValidEmail.email,
    name : isValidEmail.name,

   }
   const accessToken = jwt.sign(payload,"secret",{expiresIn:"1h"})
  //  const refreshToken = jwt.refreshToken(accessToken)
      res.status(200).json({
        message:`Logged in Successfully Welcome ${isValidEmail.name}`,
        accessToken: accessToken
      })
  
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Internal Server Error"
    })
  }
}

module.exports = {registerUserControllor,loginController};