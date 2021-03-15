import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Blog, { foreignKey: 'userId', as: 'Blogs' });
    }
  }
  User.init({
    username: { type: DataTypes.STRING(20), allowNull: false, unique: true },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: { type: DataTypes.STRING(600), allowNull: false, unique: false },
    role: { type: DataTypes.ENUM('Admin', 'creator', 'user'), allowNull: true, defaultValue: 'user' },
    firstName: { type: DataTypes.STRING(25), allowNull: true, unique: false },
    lastName: { type: DataTypes.STRING(25), allowNull: true, unique: false },
    status: { type: DataTypes.ENUM('Active', 'Inactive'), defaultValue: 'Active' },
  },
  {
    sequelize,
    modelName: 'User',
  });
  return User;
};
