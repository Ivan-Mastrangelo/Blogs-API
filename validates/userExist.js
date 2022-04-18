const { User } = require('../models');

const userExist = async (id) => {
  const userVerify = await User.findOne({ where: { id } });
  if (userVerify) return true;
  return false;
};

module.exports = userExist;