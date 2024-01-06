import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const Inbox = sequelize.define("Inbox", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  status: {
    type: DataTypes.BOOLEAN,
    default: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,

  },
});


export default Inbox;
