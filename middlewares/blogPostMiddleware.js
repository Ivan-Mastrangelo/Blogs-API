const Joi = require('joi');
const badRequest = require('../error/badRequest');

const userSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
});

const blogPostMiddleware = (req, _res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { error } = userSchema.validate({ title, content, categoryIds });
    if (error) throw badRequest(error.message);
  
  next();
  } catch (error) {
    next(error);
  }
};

module.exports = blogPostMiddleware;