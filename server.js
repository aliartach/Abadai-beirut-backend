import express from 'express';
import sequelize from './Config/database.js';
import UserRoutes from './Routes/UsersRoutes.js'
import ReviewsRoutes from "./Routes/ReviewsRoutes.js";
import OrdersRoutes from "./Routes/OrdersRoutes.js"
import ProductsRoutes from "./Routes/productsRoutes.js";
import MessagesRoutes from "./Routes/inboxRoutes.js";
import CategoriesRoutes from "./Routes/categoriesRoutes.js";;
import AdminsRoutes from "./Routes/adminRoutes.js";
import cors  from "cors";
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(express.json());
app.use("/api",  UserRoutes);
app.use("/api",  ReviewsRoutes);
app.use("/api",  ProductsRoutes);
app.use("/api",  OrdersRoutes);
app.use("/api",  MessagesRoutes);
app.use("/api",  CategoriesRoutes);
app.use("/api",  AdminsRoutes);
app.use(cors());

try {
  sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {
      console.log('listening on port', process.env.PORT);
    });
  });
} catch (error) {
  console.error('Error during initialization:', error);
}