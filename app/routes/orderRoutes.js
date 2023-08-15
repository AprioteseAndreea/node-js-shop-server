const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

router.get('/orders', orderController.getAllOrders);
router.get('/orders/:id', orderController.getOrderById);
router.get('/orders/user', orderController.getAllOrdersByUserId); // New route for fetching orders by userId

// Other order-related routes

module.exports = router;
