'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
        validate: { isEmail: true }
      },
      password: {
        type: Sequelize.STRING(600),
        allowNull: false,
        unique: false
      },
      role: {
        type: Sequelize.ENUM('Admin', 'creator', 'user'),
        allowNull: true,
        defaultValue: 'user'
      },
      firstName: {
        type: Sequelize.STRING(25),
        allowNull: true,
        unique: false
      },
      lastName: {
        type: Sequelize.STRING(25),
        allowNull: true,
        unique: false
      },
      status: {
        type: Sequelize.ENUM('Active', 'Inactive'),
        defaultValue: 'Active'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};