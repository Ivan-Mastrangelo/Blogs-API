const { Category } = require('../models');
const badRequest = require('../error/badRequest');

const create = async (name) => {
  if (!name) throw badRequest('"name" is required');

  const newCategory = await Category.create({ name });         
  return newCategory;
};

module.exports = {
  create,
};