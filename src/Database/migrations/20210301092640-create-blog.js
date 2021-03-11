module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      title: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      description: {
        type: Sequelize.STRING(300),
        allowNull: false,
        unique: false,
      },
      photo: {
        type: Sequelize.STRING(600),
        allowNull: true,
        unique: false,
        default: 'no-photo.jpg',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Blogs');
  },
};
