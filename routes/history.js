import express from "express";
import {getOrderByCredentials} from "../controllers/history.js";

const router = express.Router();

router.get('/orders', getOrderByCredentials);

export default router;