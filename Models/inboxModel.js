import { DataTypes } from 'sequelize';
import sequelize from "../Config/database.js";

const MessagesModule = sequelize.define('Messages', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "First name is required" },
            notEmpty: { msg: "First name must not be empty" },
        },
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "Last name is required" },
            notEmpty: { msg: "Last name must not be empty" },
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING, 
        allowNull: true,
    },
    messages: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
});

export default MessagesModule;
