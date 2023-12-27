import { DataTypes } from "sequelize";
import sequelize from "../Config/database.js";
import bcrypt from "bcrypt";

const AdminsModule = sequelize.define("Admins", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "UserName is required" },
      notEmpty: { msg: "UserName must not be empty" },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
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

export default AdminsModule;
