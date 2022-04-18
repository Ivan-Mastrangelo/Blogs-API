const userService = require('../services/userService');

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    
    const token = await userService.create({ displayName, email, password, image });
  
    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (_req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAllUsers,
  getUserById,
};