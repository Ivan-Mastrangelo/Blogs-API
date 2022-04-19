const { User } = require('../models');

const userValidate = async (email, password) => {
  const userVerify = await User.findOne({ where: { email, password } });
  if (userVerify) return userVerify;
  return false;
};

module.exports = userValidate;