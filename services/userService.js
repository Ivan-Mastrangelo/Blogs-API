const { User } = require('../models');
const tokenGenerate = require('../helpers/tokenGenerate');
const userValidate = require('../validates/userValidate');
const conflict = require('../error/conflict');
const userExist = require('../validates/userExist');
const notFound = require('../error/notFound');

const create = async ({ displayName, email, password, image }) => {
  const userCreateValidate = await userValidate(email);

  if (userCreateValidate) throw conflict('User already registered');

  await User.create({ displayName, email, password, image });
  
  const userToken = tokenGenerate({ displayName, email });
  
  console.log(userToken);             
  
  return userToken;
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return users;
};

const getUserById = async (id) => {
  const exist = await userExist(id);
  if (exist === false) throw notFound('User does not exist');
  const user = await User.findByPk(id, { attributes: { exclude: 'password' } });
  return user; 
};

module.exports = {
  create,
  getAllUsers,
  getUserById,
};