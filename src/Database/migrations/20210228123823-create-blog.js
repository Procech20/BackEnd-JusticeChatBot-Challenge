'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER(11),
        allowedNUll: false
      },
      title: {
        type: Sequelize.STRING(50),
        allowedNull: false,
        unique: true
      },
      description: {
        type: Sequelize.STRING(300),
        allowedNull: false,
      },
      photo: {
        type: Sequelize.STRING(25),
        allowedNUll: true,
        default: 'no-photo.jpg'
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
    await queryInterface.dropTable('Blogs');
  }
};