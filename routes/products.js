const express = require('express');
const router = express.Router();
const productService = require('../services/productService');
const ApiSecurity = require('../middleware/apiSecurity');

router.get('/', ApiSecurity.requireLogin, async (req, res) => {
    const products = await productService.getAll(req.query);
    res.json(products);
});

router.get('/:id', ApiSecurity.requireLogin, async (req, res) => {
    const product = await productService.getOne(req.params.id);
    res.json(product);
});

router.post('/add', ApiSecurity.requirePermits('manage_product'), async (req, res) => {
    const product = await productService.add(req.body);
    res.json(product);
});

router.put('/:id', ApiSecurity.requirePermits('manage_product'), async (req, res) => {
    const product = await productService.update(req.params.id, req.body);
    res.json(product);
});

router.get('/search', ApiSecurity.requireLogin, async (req, res) => {
    const products = await productService.search(req.query);
    res.json(products);
});

module.exports = router;