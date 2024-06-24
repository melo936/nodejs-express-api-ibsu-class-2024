const ProductModel = require('../models/product');

module.exports = {
    getAll: async ({ page = 1, limit = 10 }) => {
        return ProductModel.find()
            .limit(limit)
            .skip((page - 1) * limit)
            .exec();
    },
    getOne: async (id) => {
        return ProductModel.findById(id);
    },
    add: async (productData) => {
        const product = new ProductModel(productData);
        return product.save();
    },
    update: async (id, productData) => {
        return ProductModel.findByIdAndUpdate(id, productData, { new: true });
    },
    search: async ({ query, page = 1, limit = 10 }) => {
        return ProductModel.find({ name: { $regex: query, $options: 'i' } })
            .limit(limit)
            .skip((page - 1) * limit)
            .exec();
    }
};