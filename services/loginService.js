const tokenGenerate = require('../helpers/tokenGenerate');
const badRequest = require('../error/badRequest');
const userValidate = require('../validates/userValidate');

const login = async ({ email, password }) => {
  const loginValidate = await userValidate(email, password);

  if (loginValidate === false) throw badRequest('Invalid fields');
  
  const userToken = tokenGenerate({ id: loginValidate.id });
  
  return userToken;
};

module.exports = {
  login,
};