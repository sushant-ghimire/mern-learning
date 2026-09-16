const express= require("express");
// const login = require("./controller/user.controller")
const authRouter = require("./route/user.route");
const connectDb = require("./config/connectMongoos");


const app = express();
app.use(express.json()) // app lai json banera bujauxa
connectDb();
console.log("hello")
const port=8000

app.listen(port,()=>{
})

app.get("/test",(req,res)=>{
    res.send("hello fom sushant test")
})

app.get("/",(req,res)=>{
    res.send("hello fom main")
})


//SSR and CSR 
//server side rendering 
// client side rendering 



// const user=require("./data/user.json");
// const { login } = require("./controller/user.controller");


// login()

app.use("/auth", authRouter);