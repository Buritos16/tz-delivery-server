import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
import Product from "./models/Product.js";
import Coupon from "./models/Coupon.js";
import {data, coupons} from "./data/index.js";
import menuRoutes from "./routes/menu.js";
import cartRoutes from "./routes/cart.js";
import historyRoutes from "./routes/history.js";

dotenv.config()
const app = express()
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());


app.use('/menu', menuRoutes);
app.use('/cart', cartRoutes);
app.use('/history', historyRoutes);


const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))

    /* DO NOT TOUCH */
    /* USED ONLY ONE TIME TO ADD DATA IN DB */
    //Product.insertMany(data)
    //Coupon.insertMany(coupons)

}).catch((err) => console.log(`${err} did not connect`))