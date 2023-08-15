const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  findMany: () => {
    return prisma.author.findMany();
  },

  findUnique: (where) => {
    return prisma.author.findUnique({ where });
  },
  // Other model functions
};
