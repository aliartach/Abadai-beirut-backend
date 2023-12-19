import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";
import bcrypt from 'bcrypt'

const Admin = sequelize.define("Admin", {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        set(value) {
          const hashedPassword = bcrypt.hashSync(value, 10);
          this.setDataValue("password", hashedPassword);
        },
      },
  });

  Admin.sync();

  export default Admin;
