module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { timestamp: false });

  User.associate = (models) => {
    User.hasMany(models.Address,
      { foreignKey: 'userId', as: 'BlogPosts' });
  };

  return User;
};
