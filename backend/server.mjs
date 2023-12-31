import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import helmet from "helmet";
import morgan from "morgan";
import categoryRoutes from "./routes/category.js";
import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js"
import orderRouter from './routes/order.js'
import adminRouter from './routes/admin.js'
import sitemapRoute from './routes/sitemap.js'
import dotenv from 'dotenv';
/* CONFIGURATIONS */
dotenv.config();
const app = express(); 
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/categories", categoryRoutes);
app.use('/users',userRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.use('/admin', adminRouter);
app.use('/', sitemapRoute);
/* MONGOOSE SETUP */
const PORT = process.env.PORT;
const MONGO_URL= process.env.MONGO_URL
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "raffa",
  })
  .then(async () => {
    console.log(PORT);
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));


    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
    // Transaction.insertMany(transactions);
  })
  .catch((error) => console.log(`${error} did not connect`));

  