const productService = require('../services/productService');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
};

exports.getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.getProductById(productId);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the product.' });
  }
};

exports.getPaginatedProducts = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    try {
      const products = await productService.getPaginatedProducts(page);
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching paginated products.' });
    }
  };
  
// Other controller functions related to products
