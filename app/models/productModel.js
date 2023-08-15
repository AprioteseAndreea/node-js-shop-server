const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  findMany: () => {
    return prisma.product.findMany();
  },

  findUnique: (productId) => {
    return prisma.product.findUnique({ where: { id: parseInt(productId) } });
  },
  // Other model functions related to products
  updateProduct: async (productId, updatedProductData) => {
    return prisma.product.update({
      where: { id: productId },
      data: updatedProductData,
    });
  },

  patchProduct: async (productId, patchProductData) => {
    return prisma.product.update({
      where: { id: productId },
      data: patchProductData,
    });
  },

  deleteProduct: async (productId) => {
    return prisma.product.delete({
      where: { id: productId },
    });
  },
  // Other model functions related to products
};
