const userCartService = require('../services/userCartService');

exports.getAllUserCartItems = async (req, res) => {
  try {
    const userCartItems = await userCartService.getAllUserCartItems();
    res.json(userCartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching userCart items.' });
  }
};

exports.getUserCartItemById = async (req, res) => {
  const userCartItemId = req.params.id;
  try {
    const userCartItem = await userCartService.getUserCartItemById(userCartItemId);
    res.json(userCartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the userCart item.' });
  }
};

exports.getUserCartProducts = async (req, res) => {
    const userId = parseInt(req.query.userId); // Assuming userId is passed as a query parameter
    try {
      const cartProducts = await userCartService.getUserCartProducts(userId);
      res.json(cartProducts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching userCart products.' });
    }
  };
// Other controller functions related to userCart
