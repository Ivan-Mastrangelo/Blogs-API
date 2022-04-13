const userService = require('../services/userService');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const newUser = await userService.create({ displayName, email, password, image });
  
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

  module.exports = {
    create,
  };