import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const Categories = sequelize.define("Categories", {
  
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

export default Categories;