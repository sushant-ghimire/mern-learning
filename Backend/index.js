const express= require("express");
// const login = require("./controller/user.controller")
const authRouter = require("./route/user.route");
const connectDb = require("./config/connectMongoos");
const productRouter = require("./route/product.route");
const {connectPostgres} = require("./config/connectPostgres");
const authRouterPost = require("./route/auth.route");
require("dotenv").config();


const app = express();
app.use(express.json()) // app lai json banera bujauxa
connectDb();
connectPostgres();
const port= process.env.port;

app.listen(port,()=>{
console.log(`Server Running At  ${port}`)
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

app.use("/product",productRouter);


app.use("/authPost",authRouterPost)