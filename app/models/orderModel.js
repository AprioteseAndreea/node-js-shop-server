const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  findMany: () => {
    return prisma.order.findMany();
  },

  findUnique: (orderId) => {
    return prisma.order.findUnique({ where: { id: parseInt(orderId) } });
  },

  // Other model functions related to orders
};
