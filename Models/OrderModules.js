import { DataTypes } from 'sequelize';
import sequelize from "../Config/database.js";


const OrdersModule = sequelize.define('Orders', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    modification: {
        type: DataTypes.STRING,
        allowNull: true
    },
    quanity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

export default OrdersModule;