const authmodel = require("../model/auth.schema");

const registerUserControllor = async(req, res)=>{
try {
    const data = req.body;
    const result = await authmodel.create(data);
     res.status(201).json({
    message: "user registered successfully"
  })
} catch (error) {
    res.status(400).json({
    message:" Internal Server Error occured",
    error:error
   })
}
}

module.exports = registerUserControllor;