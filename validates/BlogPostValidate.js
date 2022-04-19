const { Category } = require('../models');

const blogPostValidate = async (categoryIds) => {
  await Promise.all(categoryIds.map(async (ids) => {
    const exist = await Category.findByPk(ids);
    if (exist) return true;
  }));
};

module.exports = blogPostValidate;