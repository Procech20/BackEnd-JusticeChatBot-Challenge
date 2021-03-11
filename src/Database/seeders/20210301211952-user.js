module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: 1,
      username: 'Admin',
      email: 'admin@techblogs.pro',
      password: '$2a$10$lcxSe7LrBP4iLNbMwFRB8u6PPdJ3goKApqy7wWUwA8DMlLo4Hwbpq',
      firstName: 'John',
      lastName: 'Doe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      username: 'Creator',
      email: 'creator@techblogs.pro',
      password: '$2a$10$drNdmHXsJhrNRNGmIJQZPOfRqHOsvRXwByP.xoS5d2m7KXaQwbvbG',
      firstName: 'Jane',
      lastName: 'Doe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      username: 'User',
      email: 'user@techblogs.pro',
      password: '$2a$10$Jf8EneOTtWsDOQaxk4dE8ue71mYCp4jSwl4KBzoI6AAdjvn6Tls3y',
      firstName: 'Jace',
      lastName: 'Doe',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
