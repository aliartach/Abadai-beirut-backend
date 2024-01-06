import { DataTypes } from 'sequelize';
import sequelize from "../config/connection.js";


const Orders = sequelize.define('Orders', {
    
    modification: {
        type: DataTypes.STRING,
        allowNull: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});



export default Orders;