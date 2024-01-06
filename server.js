import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import sequelize from "./config/connection.js";
import categoriesRoutes from "./Routes/categoriesRoutes.js";
import inboxRoutes from "./Routes/inboxRoutes.js";
import productsRoutes from "./Routes/ProductsRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js";
import reviewRouter from "./Routes/ReviewsRoute.js";
import OrdersRouter from "./Routes/OrdersRoutes.js";
import UserRoutes from "./Routes/UserRoutes.js"
import "./Models/Relations.js";

//express app
const app = express();
// const server = http.createServer(app);

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use((req, res, next) => {
  //   console.log(req.path, req.method)
  next();
});
app.use(cors());

// routers
app.use("/api/admin", adminRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/inbox", inboxRoutes);
app.use("/api/products", productsRoutes);
app.use('/api/reviews', reviewRouter)
app.use('/api/orders', OrdersRouter);
app.use('/api/users', UserRoutes);
// app.use("/api/auth", authRouter)
// app.use("/api/admin/auth", adminAuthRouter)
// app.use("/api/notificationRoute", adminAuthRouter)
sequelize.sync();


// port
const PORT = process.env.PORT || 8090;

app.listen(process.env.PORT, () => {
  console.log("connected to db & running on port", process.env.PORT);
});
