module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Blogs', [{
    id: 1,
    title: 'The modern population',
    userId: 1,
    description: 'A blog about the fast increase of the modern population.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: 'The art of camouflage',
    userId: 2,
    description: 'A blog about some simple ways to fit in every sociiety.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    title: 'Where are headed',
    userId: 3,
    description: 'The wonders of nowadays relationships and where they lead.',
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),

  down: async (queryInterface) => queryInterface.bulkDelete('Blogs', null, {}),
};
