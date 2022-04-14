const { User } = require('../models');

const userCreateValidate = async (email) => {
  const userVerify = await User.findOne({ where: { email } });
  if (userVerify) return true;
  return false;
};

module.exports = userCreateValidate;