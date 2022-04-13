const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required,
  email: Joi.string().email().required,
  password: Joi.string().length(6).required,
});

const userInMiddleware = (req, res, next) => {
  const { display, email, password } = req.body;
  const { error } = userSchema.validate(display, email, password);
  if (error) return res.status(400).json({ message: error.message });

next();
};

module.exports = userInMiddleware;