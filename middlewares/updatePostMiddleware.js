const Joi = require('joi');
const badRequest = require('../error/badRequest');

const userSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

const updatePostMiddleware = (req, _res, next) => {
  try {
    const { title, content } = req.body;
    const { error } = userSchema.validate({ title, content });
    if (error) throw badRequest(error.message);
  
  next();
  } catch (error) {
    next(error);
  }
};

module.exports = updatePostMiddleware;