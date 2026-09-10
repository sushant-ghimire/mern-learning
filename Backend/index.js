const express= require("express");
// const login = require("./controller/user.controller")

const app = express();

console.log("hello")
const port=8000

app.listen(port,()=>{
    console.log(`helo ma express bata aako${port}`);
})

app.get("/test",(req,res)=>{
    res.send("hello fom sushant test")
})

app.get("/",(req,res)=>{
    res.send("hello fom sushant")
})


//SSR and CSR 
//server side rendering 
// client side rendering 



const user=require("./data/user.json");
const { login } = require("./controller/user.controller");

console.log(user)

login()
