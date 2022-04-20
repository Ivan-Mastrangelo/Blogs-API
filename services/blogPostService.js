const { Op } = require('sequelize');
const { BlogPost, Category, User } = require('../models');
const badRequest = require('../error/badRequest');
const getPostValidate = require('../validates/getPostValidade');
const unauthorized = require('../error/unauthorized');
const notFound = require('../error/notFound');

const create = async (title, content, categoryIds, userId) => {
  await Promise.all(categoryIds.map(async (ids) => {
    const isCategory = await Category.findByPk(ids);
    if (!isCategory) throw badRequest('"categoryIds" not found');
  }));

  const newBlogPost = await BlogPost.create({ userId, title, content });
  
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
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return allPosts;
};

const getPostById = async (id) => {
  const postValidate = await getPostValidate(id);
  if (postValidate) {
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
  } 
};

const getPostBySearch = async (searchTerm) => {
  const posts = await BlogPost.findAll({ 
    where: {
      [Op.or]: [
        { title: { [Op.substring]: searchTerm } },
        { content: { [Op.substring]: searchTerm } },
      ],
    },
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

const update = async (body, id, clientId) => {
  const { title, content, categoryIds } = body;
  if (categoryIds) throw badRequest('Categories cannot be edited');
  const updatedPost = await BlogPost.findByPk(id, {
    include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
  });
  if (clientId !== updatedPost.userId) throw unauthorized('Unauthorized user');
  
  updatedPost.content = content;
  updatedPost.title = title;
  await updatedPost.save();
 
  return updatedPost;
};

const destroy = async (id, clientId) => {
  const deletePost = await BlogPost.findByPk(id);
  if (!deletePost) throw notFound('Post does not exist');
  if (clientId !== deletePost.userId) throw unauthorized('Unauthorized user');
  await BlogPost.destroy({ where: { id } });
};

module.exports = {
  create,
  getAllPosts,
  getPostById,
  update,
  destroy,
  getPostBySearch,
};