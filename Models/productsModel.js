import { DataTypes } from 'sequelize';
import sequelize from "../Config/database.js";

const ProductsModule = sequelize.define('Products', {
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
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    price: {
        type: DataTypes.DOUBLE, // Change data type to DOUBLE
        allowNull: true,
    },
    recommended: {
        type: DataTypes.DOUBLE, // Change data type to DOUBLE
        allowNull: true,
    },
});

export default ProductsModule;
