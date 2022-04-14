const Joi = require('joi');
const badRequest = require('../error/badRequest');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
});

const userInMiddleware = (req, res, next) => {
  try {
    const { displayName, email, password } = req.body;
    const { error } = userSchema.validate({ displayName, email, password });
    if (error) throw badRequest(error.message);
  
  next();
  } catch (error) {
    next(error);
  }
};

module.exports = userInMiddleware;