module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { timestamp: false });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.Employee,
      { foreignKey: 'userId', as: 'Users' });
  };

  return BlogPost;
};