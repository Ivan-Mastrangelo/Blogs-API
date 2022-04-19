const { BlogPost } = require('../models');
const tokenDecrypt = require('../helpers/tokenDecrypt');

const BlogPostUpdateValidate = async (authorization, id) => {
  const userId = await tokenDecrypt(authorization);
  const post = await BlogPost.findByPk(id);
  if (userId !== post.userId) return false;
  return true;
};

module.exports = BlogPostUpdateValidate;