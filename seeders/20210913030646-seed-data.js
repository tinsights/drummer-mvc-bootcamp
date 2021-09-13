module.exports = {
  up: async (queryInterface, Sequelize) => {
    const drummerList = [
      {
        name: 'Tong Huat',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Kai',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Tinaes',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('drummers', drummerList);
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
