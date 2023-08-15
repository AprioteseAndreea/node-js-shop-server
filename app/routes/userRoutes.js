const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.get('/user/:userId/favorites', userController.getFavoriteProductsByUserId);

router.put('/users/:userId', userController.updateUser);
router.patch('/users/:userId', userController.patchUser);
router.delete('/users/:userId', userController.deleteUser);
// Other user-related routes

module.exports = router;
