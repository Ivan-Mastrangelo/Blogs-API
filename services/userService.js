const { User } = require('../models');
const tokenGenerate = require('../helpers/tokenGenerate');
const userCreateValidate = ('../validates/userCreateValidate');

const create = async ({ displayName, email, password, image }) => {
  if (userCreateValidate(email)) return

  await User.create({ displayName, email, password, image });
  
  const userToken = tokenGenerate({ displayName, email });
  
  console.log(userToken);             
  
  return userToken;
};

module.exports = {
  create,
};