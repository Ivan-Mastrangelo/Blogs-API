const { BlogPost } = require('../models');
// const tokenDecrypt = require('../helpers/tokenDecrypt');

const BlogPostUpdateValidate = async (id, myId) => {
  console.log(myId);
  // const userId = await tokenDecrypt(myId);
  const post = await BlogPost.findByPk(id);
  if (myId !== post.userId) return false;
  if (myId === post.userId) return true;
  // post.content = 'hjdod';
  // post.title = 'kldjfps';
  // await post.save();
};

module.exports = BlogPostUpdateValidate;