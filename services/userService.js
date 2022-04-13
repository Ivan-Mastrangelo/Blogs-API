const { User } = require('../models');
const tokenGenerate = require('../helpers/tokenGenerate');

const create = async ({ displayName, email, password, image }) => {
  await User.create({ displayName, email, password, image });
  
  const userToken = tokenGenerate({ displayName, email });
  
  console.log(userToken);             
  
  return userToken;
};

module.exports = {
  create,
};