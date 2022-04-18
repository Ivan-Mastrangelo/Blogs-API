const { Category } = require('../models');
const badRequest = require('../error/badRequest');

const create = async (name) => {
  if (!name) throw badRequest('"name" is required');

  const newCategory = await Category.create({ name });         
  return newCategory;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  create,
  getAllCategories,
};