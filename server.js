import dotenv from 'dotenv'
import express  from 'express'
import cors from 'cors'
// import sequelize from './Config/connection.js'
// import categoriesRoutes from './Routes/categoriesRoutes.js'
import inboxRoutes from './Routes/inboxRoutes.js'
// import productsRoutes from './Routes/productsRoutes.js'
// import adminRoutes from './Routes/adminRoutes.js'

//express app
const app = express();
// const server = http.createServer(app);

// middleware
app.use(express.json())
app.use((req, res, next) => {
//   console.log(req.path, req.method)
  next()
})
app.use(cors());

// routers
// app.use('/api/admin',adminRoutes)
// app.use('/api/categories', categoriesRoutes)
app.use("/api/inbox", inboxRoutes)
// app.use("/api/products",productsRoutes)
// app.use("/api/auth", authRouter)
// app.use("/api/admin/auth", adminAuthRouter)
// app.use("/api/notificationRoute", adminAuthRouter)

// port
const PORT = process.env.PORT || 8090;



//connecting to mongo db//


    app.listen(process.env.PORT, () => {

        console.log("connected to db & running on port", process.env.PORT);

    }); 


