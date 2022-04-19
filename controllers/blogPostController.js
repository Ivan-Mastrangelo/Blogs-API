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

module.exports = {
  create,
};