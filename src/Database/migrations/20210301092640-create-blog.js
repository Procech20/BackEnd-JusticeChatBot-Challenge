module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      userId: {
        type: Sequelize.INTEGER(11),
        allowedNull: false,
        unique: false
      },
      title: {
        type: Sequelize.STRING(50),
        allowedNull: false,
        unique: true
      },
      description: {
        type: Sequelize.STRING(300),
        allowedNull: false,
        unique: false
      },
      photo: {
        type: Sequelize.STRING(25),
        allowedNull: true,
        unique: false,
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