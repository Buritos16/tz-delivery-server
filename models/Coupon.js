import mongoose from "mongoose";

const CouponSchema = new mongoose.Schema(
    {
        code: String,
        discount: Number,
    },
    { timestamps: true }
);

const Coupon = mongoose.model("Coupon", CouponSchema);
export default Coupon;