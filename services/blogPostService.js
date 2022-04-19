const { BlogPost, Category, User } = require('../models');
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

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      // { model: Category, as: 'categories' },
    ],
  });
  return allPosts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      { model: Category, as: 'categories' },
    ],
  });
  return post;
};

module.exports = {
  create,
  getAllPosts,
  getPostById,
};