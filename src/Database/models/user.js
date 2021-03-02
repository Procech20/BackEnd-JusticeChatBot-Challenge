import { Model } from 'sequelize';
import config from '../config/db.config';


module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasMany(models.Blog, { foreignKey: 'userId', as: 'Blog'});
    };
  };
  User.init({
    username: { type: DataTypes.STRING(20), allowedNull: false, unique: true},
    email: { type: DataTypes.STRING(30), allowedNull: false, unique: true, validate: { isEmail: true }},
    password: { type: DataTypes.STRING(25), allowedNull: false, unique: false },
    role: { type: DataTypes.ENUM('creator', 'user'), allowNull: true, defaultValue: 'user'},
    firstName: { type: DataTypes.STRING(25), allowedNull: true, unique: false },
    lastName: { type: DataTypes.STRING(25), allowedNull: true, unique: false },
    status: { type: DataTypes.ENUM('Active', 'Inactive'), defaultValue: 'Active'}
  },{
    sequelize,
    modelName: 'User',
  });
  return User;
};