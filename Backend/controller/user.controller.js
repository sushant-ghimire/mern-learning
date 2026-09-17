const userdata = require("../data/user.json");
const userModel = require("../model/user.model");

// exports.login = (req, res) => {
//   //  const userInfo= user;

//   //  if(email === userInfo.email && pass === userInfo.password){
//   //     console.log("user is AUTHENTICATED")
//   //  }else{
//   //     throw new Error("Invalid email and password");

//   //  }

//   // console.log("hi from login");

//   const dataFromPostman = req.body;
//     console.log(dataFromPostman);
//   //   console.log(userdata.email);

//   // if (dataFromPostman.email === userdata.email) {
//   //   if (dataFromPostman.password === userdata.password) {
//   //     console.log("user is AUTHENTICATED");
//   //     console.log(`your name is ${userdata.name}`);
//   //   } else {
//   //     throw new Error("Invalid password");
//   //   }
//   // } else {
//   //   throw new Error("Invalid email");
//   // }



//  for (const element of userdata) {
  
//   if (dataFromPostman.email === element.email) {
//     if (dataFromPostman.password === element.password) {
//       console.log("user is AUTHENTICATED");
//       console.log(`your name is ${element.name}`);
//       break
//     } else {
//       throw new Error("Invalid password");
//     }
//    } else {
//      new Error("Invalid email");
//   }

   
  
// }
// ;




// }


const register = async (req, res) => {
try {
  const dataFromUser = req.body;
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

module.exports = register;