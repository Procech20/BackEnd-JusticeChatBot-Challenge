const { Model } = require('sequelize');
module.exports  = (sequelize, DataTypes) => {
  class Blog extends Model {
    static associate(models) {
      // define association here
    }
  };
  Blog.init({
    userId: { type: DataTypes.INTEGER(11), allowedNull: false },
    title: { type: DataTypes.STRING(50), allowedNull: false, unique: true },
    description: { type: DataTypes.STRING(300), allowedNull: false },
    photo: { type: DataTypes.STRING(25), allowedNull: true, defaultValue: 'no-photo.jpg' }
  },
  {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};
