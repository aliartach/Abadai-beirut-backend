import { DataTypes } from 'sequelize';
import sequelize from "../Config/database.js";


const ReviewsModule = sequelize.define('Reviews', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    reviewsDetails: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "Details are required" },
            notEmpty: { msg: "You must enter Details" },
        },
    },
});

export default ReviewsModule;