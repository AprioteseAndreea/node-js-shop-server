const express = require('express');
const userCartController = require('../controllers/userCartController');

const router = express.Router();

router.get('/user-cart', userCartController.getAllUserCartItems);
router.get('/user-cart/:id', userCartController.getUserCartItemById);
router.get('/user-cart/products', userCartController.getUserCartProducts);

// Other userCart-related routes

module.exports = router;
