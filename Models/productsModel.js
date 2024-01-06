import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const Products = sequelize.define("Products", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "First name is required" },
      notEmpty: { msg: "First name must not be empty" },
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  price: {
    type: DataTypes.DOUBLE, // Change data type to DOUBLE
    allowNull: true,
  },
  recommended: {
    type: DataTypes.BOOLEAN, // Change data type to DOUBLE
    allowNull: true,
  },
});


export default Products;
