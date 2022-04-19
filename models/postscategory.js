module.exports = (sequelize) => {
  const PostsCategory = sequelize.define('PostsCategory', {}, { timestamps: false });
  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategory,
      foreingKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPost',
      through: PostsCategory,
      foreingKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategory;
};