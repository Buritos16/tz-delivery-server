import Order from "../models/Order.js";

export const addOrder = async (req, res) => {
    try {

        const doc = new Order({
            ...req.body
        });

        const order = await doc.save();

        const {_id, ...orderData} = order._doc

        res.status(200).json({
            id: _id,
            orderCreated: true
        });

    } catch (err) {
        res.status(404).json({message: err.message});
    }
}
