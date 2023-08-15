const orderService = require('../services/orderService');

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching orders.' });
  }
};

exports.getOrderById = async (req, res) => {
  const orderId = req.params.id;
  try {
    const order = await orderService.getOrderById(orderId);
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the order.' });
  }
};

exports.getAllOrdersByUserId = async (req, res) => {
    const userId = parseInt(req.query.userId); // Assuming userId is passed as a query parameter
    try {
      const orders = await orderService.getAllOrdersByUserId(userId);
      res.json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching orders by userId.' });
    }
  };
// Other controller functions related to orders
