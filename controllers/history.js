import Order from "../models/Order.js";


export const getOrderByCredentials = async (req, res) => {
    try {

        const orders = await Order.find({phone: req.query.phone, email: req.query.email})
        res.status(200).json(orders)

    } catch (err) {
        res.status(404).json({message: err.message});
    }
}