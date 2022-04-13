const { User } = require('../models');

const userCreateValidate = async (email) => {
  const userVerify = await User.findOne({ where: { email } });
  if (userVerify) return res.status(409).jasom({ massage: 'User already registered' });
  return true;
};

module.exports = userCreateValidate;