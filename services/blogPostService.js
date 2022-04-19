const { BlogPost, Category, User } = require('../models');
const badRequest = require('../error/badRequest');
const tokenDecrypt = require('../helpers/tokenDecrypt');
const getPostValidate = require('../validates/getPostValidade');
// const BlogPostUpdateValidate = require('../validates/BlogPostUpdateValidate');
// const unauthorized = require('../error/unauthorized');

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

// const update = async (id, authorization, body) => {
//   const { title, content, categoryIds } = body;
//   const UpdateValidate = BlogPostUpdateValidate(id, authorization);
//   if (UpdateValidate === false) throw unauthorized('Unauthorized user');
//   if (categoryIds) throw badRequest('Categories cannot be edited');
//   await BlogPost.update({ title, content }, { where: { id } });
//   const updatedPost = await BlogPost.findByPk(id, {
//     include: [{ model: Category, as: 'categories' }],
//   });
//   return updatedPost;
// };

module.exports = {
  create,
  getAllPosts,
  getPostById,
  // update,
};