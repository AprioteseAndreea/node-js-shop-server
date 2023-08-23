const userModel = require("../models/userModel");
const prisma = require("@prisma/client");

exports.getAllUsers = async () => {
  return userModel.findMany();
};

exports.getUserById = async (userId) => {
  return userModel.findUnique({ where: { id: parseInt(userId) } });
};

exports.getUserProductsFavsByUserId = async (userId) => {
  return userModel.findUnique({ where: { id: parseInt(userId) } });
};

exports.getFavoriteProductsByUserId = async (userId) => {
  return userModel.findUnique({
    where: { id: userId },
    include: {
      favourites: true,
    },
  });
};

exports.updateUser = async (userId, updatedUserData) => {
    return prisma.author.update({
      where: { id: userId },
      data: updatedUserData,
    });
  };
  
  exports.patchUser = async (userId, patchUserData) => {
    return prisma.author.update({
      where: { id: userId },
      data: patchUserData,
    });
  };
  
  exports.deleteUser = async (userId) => {
    return prisma.author.delete({
      where: { id: userId },
    });
  };

// Other service functions
