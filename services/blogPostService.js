const { BlogPost } = require('../models');
const { Category } = require('../models');
const badRequest = require('../error/badRequest');
const tokenDecrypt = require('../helpers/tokenDecrypt');

const create = async (title, content, categoryIds, authorization) => {
  await Promise.all(categoryIds.map(async (ids) => {
    const exist = await Category.findByPk(ids);
    if (!exist) throw badRequest('"categoryIds" not found');
  }));

  const userId = await tokenDecrypt(authorization);
  const newBlogPost = await BlogPost
    .create({ userId, title, content });
  
  return newBlogPost;
};

module.exports = {
  create,
};