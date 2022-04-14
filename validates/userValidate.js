const { User } = require('../models');

const userValidate = async (email) => {
  const userVerify = await User.findOne({ where: { email } });
  if (userVerify) return true;
  return false;
};

module.exports = userValidate;