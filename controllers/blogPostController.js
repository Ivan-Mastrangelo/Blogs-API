const blogPostService = require('../services/blogPostService');

const create = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const userId = req.user;
    const blogPost = await blogPostService.create(title, content, categoryIds, userId);
  
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

const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await blogPostService.getPostById(id);
    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

const getPostBySearch = async (req, res, next) => {
  try {
    const searchTerm = req.query.q;
    const posts = await blogPostService.getPostBySearch(searchTerm);
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const clientId = req.user;
    const updatedPost = await blogPostService.update(body, id, clientId);
    return res.status(200).json(updatedPost);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const clientId = req.user;
    await blogPostService.destroy(id, clientId);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAllPosts,
  getPostById,
  update,
  destroy,
  getPostBySearch,
};