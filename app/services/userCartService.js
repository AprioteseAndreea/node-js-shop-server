const userCartModel = require('../models/userCartModel');

exports.getAllUserCartItems = async () => {
  return userCartModel.findMany();
};

exports.getUserCartItemById = async (userCartItemId) => {
  return userCartModel.findUnique(userCartItemId);
};

exports.getUserCartProducts = async (userId) => {
    return userCartModel.findMany({
      where: {
        authorId: userId,
      },
      include: {
        product: true,
      },
    });
  };

// Other service functions related to userCart
