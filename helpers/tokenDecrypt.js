const jwt = require('jsonwebtoken');

const { User } = require('../models');

const tokenDecrypt = async (token) => {
  const secretKey = 'só$abeQu&mviu';
  const decode = jwt.verify(token, secretKey);
  const { email } = decode;
  const user = await User.findOne({ where: { email } });
  const userId = user.id;
  return userId;
};

module.exports = tokenDecrypt;
