const tokenGenerate = require('../helpers/tokenGenerate');
const badRequest = require('../error/badRequest');
const userValidate = require('../validates/userValidate');

const login = async ({ email, password }) => {
  const isUser = await userValidate(email, password);

  if (isUser === false) throw badRequest('Invalid fields');
  
  const userToken = tokenGenerate({ id: isUser.id });
  
  return userToken;
};

module.exports = {
  login,
};