const { BlogPost } = require('../models');
const notFound = require('../error/notFound');

const getPostValidate = async (id) => {
  const postValidate = await BlogPost.findByPk(id);
  if (!postValidate) throw notFound('Post does not exist');
  return true;
};

module.exports = getPostValidate;