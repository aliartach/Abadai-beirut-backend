import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const Inbox = sequelize.define("Inbox", {
    firstName:{
        type: DataTypes.STRING, allowNull:false, required:true
    }
    ,
    lastName:{
        type: DataTypes.STRING, allowNull:false, required:true
    },
    email:{
        type: DataTypes.STRING, allowNull:false, required:true
    },
    status:{
        type: DataTypes.BOOLEAN, default:false,
    },
    message:{
        type: DataTypes.STRING, allowNull:false, required:true
    }
})
    
Inbox.sync();

export default Inbox;

   

