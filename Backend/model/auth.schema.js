const { DataTypes } = require("sequelize");
const { postgres } = require("../config/connectPostgres");


const authmodel = postgres.define("auth",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey :true,
        autoIncrement: true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false    
    },
    isVerified:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        dialectTypes:true
    },
    gender:{
        type: DataTypes.ENUM("male","female","other"),
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false

    },
    profilePicture:{
        type:DataTypes.STRING,
        allowNull:true},
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports = authmodel