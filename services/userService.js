const { User } = require('../models');
const tokenGenerate = require('../helpers/tokenGenerate');
const userCreateValidate = require('../validates/userCreateValidate');
const conflict = require('../error/conflict');

const create = async ({ displayName, email, password, image }) => {
  const userValidate = await userCreateValidate(email);

  if (userValidate) throw conflict('User already registered');

  await User.create({ displayName, email, password, image });
  
  const userToken = tokenGenerate({ displayName, email });
  
  console.log(userToken);             
  
  return userToken;
};

module.exports = {
  create,
};