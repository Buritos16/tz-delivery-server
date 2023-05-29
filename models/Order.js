import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        address: String,
        phone: String,
        orderSum: Number,
        order: [{
            name: String,
            price: Number,
            description: String,
            restaurant: String,
            rating: Number,
            count: Number,
        },]
    },
    {timestamps: true}
);

const Order = mongoose.model("Order", OrderSchema);
export default Order;