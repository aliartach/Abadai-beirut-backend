import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";
import bcrypt from "bcrypt";

const User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "First name is required" },
      notEmpty: { msg: "First name must not be empty" },
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "last name is required" },
      notEmpty: { msg: "last name must not be empty" },
    },
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: { msg: "Email is required" },
    },
  },
  phoneNumber: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      const salt = bcrypt.genSaltSync(12);
      const hash = bcrypt.hashSync(value, salt);
      this.setDataValue("password", hash);
    },
  },
});


export default User;
