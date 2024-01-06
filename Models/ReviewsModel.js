import { DataTypes } from 'sequelize';
import sequelize from "../config/connection.js";


const Reviews = sequelize.define('Reviews', {
    
    reviewsDetails: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});


export default Reviews;