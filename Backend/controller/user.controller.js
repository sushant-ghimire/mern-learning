const userdata = require("../data/user.json");
const userModel = require("../model/user.model");
const bcrypt = require("bcrypt")

const loginController = async(req,res)=>{
  try {
    const dataFromUser = req.body;

    const isValidEmail = await userModel.findOne({
      email : dataFromUser.email,
    })

    if(!isValidEmail){
      res.status(401).json({
        message: "No email found"
      })
    }

    const isValidpassword = await bcrypt.compare(
      dataFromUser.password,
      isValidEmail.password
    )

    if(!isValidpassword){
      res.status(401).json({
        message:"Password milena"
      })
    }

    res.status(200).json({
      message: (`${isValidEmail.name} logeed in successfully`)
    })


  } catch (error) {
    res.status(500).json({
      message:"Internal server Error",
      error : error.message
    })
  }

}


const register = async (req, res) => {
try {
  let dataFromUser = req.body;

  const hashpassword = await bcrypt.hash(dataFromUser.password,10) 
  
  dataFromUser= {
    ...dataFromUser,
    password: hashpassword

  };

  const result = await userModel.create(dataFromUser);
  res.status(201).json({
    message: "user registered successfully",
    data:result
  })

} catch (error) {
   res.status(400).json({
    message:"Error occured",
    error:error
   })
}  


}


const listUSerController = async(req,res)=>{
  try {
    const result = await userModel.findAndCount({});
    res.status(200).json({
      message:"the list of user are:",
      data :result
    })
  } catch (error) {
    res.status(500).json({
      message:"User featched not so successfull",
      error: error.message
      
    })
  }
  
}


const listSpecialUSer = async(req,res)=>{
  try {
    const id = req.params.id;
    const result = await userModel.findById(id);
    delete result.password;
    res.status(200).json({
      message:"the list of user are:",
      data :result
    })
  } catch (error) {
    res.status(500).json({
      message:"User featched not so successfull",
      error: error.message
      
    })
  }
  
}


const updateUser =async (req,res)=>{
  try {
    const id = req.params.id;
    const data = req.body;

    const result = await  userModel.findByIdAndUpdate(id,data,{
      new:true
    }).select("-password");
     res.status(200).json({
      message:"user update successfully",
      data :result
    })

  } catch (error) {
    res.status(500).json({
      message:"Update failed",
      error: error.message
      
    })
  }
}

const deleteUser =async (req,res)=>{
  try {
    const id = req.params.id;
    const result = await  userModel.findByIdAndDelete(id)
     res.status(200).json({
      message:"user deleted successfully",
      data :result
    })
  } catch (error) {
     res.status(500).json({
      message:"delete failed",
      error: error.message
      
    })
  }
}




module.exports = {
  register,
  loginController,
  listUSerController,
  listSpecialUSer,
  deleteUser,
  updateUser};