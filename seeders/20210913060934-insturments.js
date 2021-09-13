module.exports = {
  up: async (queryInterface, Sequelize) => {
    const instrumentList = [
      {
        name: 'Snare Drum',
        drummer_id: 1,
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        name: 'Snare Drum',
        drummer_id: 2,
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        name: 'Snare Drum',
        drummer_id: 3,
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        name: 'Cowbell',
        drummer_id: 2,
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        name: 'Double Bass',
        drummer_id: 3,
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        name: 'Tom Toms',
        drummer_id: 1,
        created_at: new Date(),
        updated_at: new Date(),

      },
    ];
    await queryInterface.bulkInsert('instruments', instrumentList);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
