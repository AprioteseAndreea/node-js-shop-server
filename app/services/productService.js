const productModel = require("../models/productModel");

const ITEMS_PER_PAGE = 10; // Adjust this as needed

exports.getAllProducts = async () => {
  return productModel.findMany();
};

exports.getProductById = async (productId) => {
  return productModel.findUnique(productId);
};

exports.getPaginatedProducts = async (page) => {
  const skip = (page - 1) * ITEMS_PER_PAGE;

  const products = await productModel.findMany({
    take: ITEMS_PER_PAGE,
    skip: skip,
  });

  return products;
};

exports.updateProduct = async (productId, updatedProductData) => {
  return productModel.updateProduct(productId, updatedProductData);
};

exports.patchProduct = async (productId, patchProductData) => {
  return productModel.patchProduct(productId, patchProductData);
};

exports.deleteProduct = async (productId) => {
  return productModel.deleteProduct(productId);
};
// Other service functions related to products
