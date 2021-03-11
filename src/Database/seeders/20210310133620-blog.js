module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Blogs', [{
    id: 1,
    title: 'The modern population',
    userId: 2,
    description: 'A blog about the fast increase of the modern population.',
    photo: 'people-walking.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: 'The art of camouflage',
    userId: 2,
    description: 'A blog about some simple ways to fit in every sociiety.',
    photo: 'person-wearing-mask.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    title: 'Where are headed',
    userId: 2,
    description: 'The wonders of nowadays relationships and where they lead.',
    photo: 'guy and girl wondering.png',
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),

  down: async (queryInterface) => queryInterface.bulkDelete('Blogs', null, {}),
};
