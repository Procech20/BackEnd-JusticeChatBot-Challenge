import { Model } from 'sequelize';


module.exports = (sequelize, DataTypes) => {
  class blog extends Model {

    static associate(models) {
      blog.belongsTo(models.User, { foreignKey: 'userId', as: 'user'})
    }
  };
  blog.init({
    userId: { type: DataTypes.INTEGER(11), unique: false, allowedNull: false},
    title: { type: DataTypes.STRING(50), unique: true, allowedNull: false},
    description: { type: DataTypes.STRING(300), unique: false, allowedNull: false},
    photo: { type: DataTypes.STRING(25), unique: false, allowedNull: true, default: 'no-photo.jpg'}
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return blog;
};