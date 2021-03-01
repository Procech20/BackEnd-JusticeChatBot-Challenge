'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // define association here
    }
  };
  User.init({
    username:{ type:DataTypes.STRING(15), allowedNull: false, unique: true },
    email: { type: DataTypes.STRING, allowedNull: false, unique: true },
    password: { type: DataTypes.STRING, allowedNull: false}
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};