const { BlogPost } = require('../models');
const tokenDecrypt = require('../helpers/tokenDecrypt');

const BlogPostUpdateValidate = async (id, authorization) => {
  console.log(authorization);
  const userId = await tokenDecrypt(authorization);
  const post = await BlogPost.findByPk(id);
  if (userId !== post.userId) return false;
  if (userId === post.userId) return true;
};

module.exports = BlogPostUpdateValidate;