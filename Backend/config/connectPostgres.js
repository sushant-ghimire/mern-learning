const {Sequelize} = require("sequelize");  
const authRouter = require("../route/user.route");
 
 const postgres =  new Sequelize("postgres","postgres","postgres",{  //(date base name, username, password)
    host: "localhost",
    dialect: "postgres",  // database ko name
    port :5432,
    logging: false
 });

 const connectPostgres = async()=>{
    try {
        await postgres.authenticate();
        console.log("postgres connected")
        await postgres.sync();
        console.log("postgres Synced")
    } catch (error) {
        console.log(`postgres connected failed error ${error.message}`);
        
    }
 }

 module.exports= {connectPostgres,postgres}