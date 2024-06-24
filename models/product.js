const mongoose = require('mongoose');

const warehouseSchema = new mongoose.Schema({
    name: String,
    stock: Number,
});

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    warehouses: [warehouseSchema],
    sale: { type: Boolean, required: true, default: false },
    characteristics: mongoose.Schema.Types.Mixed
}, {
    collection: 'products',
    timestamps: true,
});

const ProductModel = mongoose.model('Product', productSchema);
module.exports = ProductModel;