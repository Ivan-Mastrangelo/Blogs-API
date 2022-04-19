const { BlogPost, Category, User } = require('../models');
const badRequest = require('../error/badRequest');
const tokenDecrypt = require('../helpers/tokenDecrypt');
const getPostValidate = require('../validates/getPostValidade');
const unauthorized = require('../error/unauthorized');

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

const update = async (body, id, myId) => {
  const { title, content, categoryIds } = body;
  if (categoryIds) throw badRequest('Categories cannot be edited');
  const updatedPost = await BlogPost.findByPk(id, {
    include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
  });
  if (myId !== updatedPost.userId) throw unauthorized('Unauthorized user');
  
  updatedPost.content = content;
  updatedPost.title = title;
  await updatedPost.save();
 
  return updatedPost;
};

module.exports = {
  create,
  getAllPosts,
  getPostById,
  update,
};