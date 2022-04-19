const jwt = require('jsonwebtoken');

const tokenDecrypt = async (token) => {
  const secretKey = 'só$abeQu&mviu';
  const decode = jwt.verify(token, secretKey);
  const { id } = decode;
  return id;
};

module.exports = tokenDecrypt;
