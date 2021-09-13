module.exports = {
  up: async (queryInterface, Sequelize) => {
    const drummerList = [
      {
        name: 'Tong Huat',
        price: 25,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Kai',
        price: 200,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Tinaes',
        price: 0.99,
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
