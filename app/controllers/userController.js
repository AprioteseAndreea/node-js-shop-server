const userService = require("../services/userService");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching users." });
  }
};

exports.getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userService.getUserById(userId);
    res.json(user);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the user." });
  }
};

exports.getFavoriteProductsByUserId = async (req, res) => {
  const userId = parseInt(req.params.userId);
  try {
    const author = await userService.getFavoriteProductsByUserId(userId);
    res.json(author.favourites);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching favorite products." });
  }
};

exports.updateUser = async (req, res) => {
    const userId = parseInt(req.params.userId);
    const updatedUserData = req.body; // Assuming the updated user data is in the request body
    try {
      const updatedUser = await userService.updateUser(userId, updatedUserData);
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while updating the user.' });
    }
  };
  
  exports.patchUser = async (req, res) => {
    const userId = parseInt(req.params.userId);
    const patchUserData = req.body; // Assuming the patch data is in the request body
    try {
      const patchedUser = await userService.patchUser(userId, patchUserData);
      res.json(patchedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while patching the user.' });
    }
  };
  
  exports.deleteUser = async (req, res) => {
    const userId = parseInt(req.params.userId);
    try {
      await userService.deleteUser(userId);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while deleting the user.' });
    }
  };

// Other controller functions
