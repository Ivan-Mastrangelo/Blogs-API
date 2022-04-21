const jwt = require('jsonwebtoken');

const tokenGenerate = (payload) => {
const secretKey = 'só$abeQu&mviu';

const jwtConfig = {
  expiresIn: '5d',
  algorithm: 'HS256',
};

const token = jwt.sign(payload, secretKey, jwtConfig);

return token;
};

module.exports = tokenGenerate;
