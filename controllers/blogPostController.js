const blogPostService = require('../services/blogPostService');

const create = async (req, res, next) => {
    try {
      const { title, content, categoryIds } = req.body;
      const { authorization } = req.headers;
      const blogPost = await blogPostService.create(title, content, categoryIds, authorization);
    
      return res.status(201).json(blogPost);
    } catch (error) {
      next(error);
    }
  };

  const getAllPosts = async (_req, res, next) => {
    try {
      const posts = await blogPostService.getAllPosts();
      return res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
  };

module.exports = {
  create,
  getAllPosts,
};