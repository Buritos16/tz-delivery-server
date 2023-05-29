import Product from "../models/Product.js";


export const getProducts = async (req, res) => {

    try {
        const products = await Product.find().select('name price description restaurant rating');
        res.status(200).json(products);

    } catch (err) {
        res.status(404).json({message: err.message});
    }
}