const Joi = require('joi');
const badRequest = require('../error/badRequest');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
});

const loginMiddleware = (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { error } = userSchema.validate({ email, password });
    if (error) throw badRequest(error.message);
  
  next();
  } catch (error) {
    next(error);
  }
};

module.exports = loginMiddleware;