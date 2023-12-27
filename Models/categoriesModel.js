import { DataTypes } from "sequelize";
import sequelize from "../Config/database.js";

const CategoriesModule = sequelize.define("Categories", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "First name is required" },
      notEmpty: { msg: "First name must not be empty" },
    },
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default CategoriesModule;
