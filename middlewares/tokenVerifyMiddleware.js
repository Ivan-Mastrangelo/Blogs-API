const jwt = require('jsonwebtoken');

const tokenVerify = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const secretKey = 'só$abeQu&mviu';
    const payload = jwt.verify(token, secretKey);
    req.user = payload.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  };

module.exports = tokenVerify;