import express from "express";
import {addOrder} from "../controllers/cart.js";

const router = express.Router();

router.post('/order', addOrder);

export default router;