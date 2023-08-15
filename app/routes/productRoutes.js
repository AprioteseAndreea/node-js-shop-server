const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.get('/products/paginated', productController.getPaginatedProducts);
// Other product-related routes

module.exports = router;
