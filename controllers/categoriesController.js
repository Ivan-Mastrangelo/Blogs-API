const categoriesService = require('../services/categoriesService');

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    
    const category = await categoriesService.create(name);
  
    return res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await categoriesService.getAllCategories();
    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAllCategories,
};