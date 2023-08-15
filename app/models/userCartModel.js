const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  findMany: () => {
    return prisma.userCart.findMany();
  },

  findUnique: (userCartId) => {
    return prisma.userCart.findUnique({ where: { id: parseInt(userCartId) } });
  },

  // Other model functions related to userCart
};
