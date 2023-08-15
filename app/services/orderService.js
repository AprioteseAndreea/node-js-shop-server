const orderModel = require('../models/orderModel');

exports.getAllOrders = async () => {
  return orderModel.findMany();
};

exports.getOrderById = async (orderId) => {
  return orderModel.findUnique(orderId);
};

exports.getAllOrdersByUserId = async (userId) => {
    return prisma.order.findMany({
      where: {
        userId: userId,
      },
      include: {
        products: true,
      },
    });
  };
// Other service functions related to orders
