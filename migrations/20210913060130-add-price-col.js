module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('drummers', 'price', { type: Sequelize.NUMERIC });
    await queryInterface.createTable('instruments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      drummer_id: {
        type: Sequelize.INTEGER,
        // This links the drummer_id column to the id column in the drummers table
        references: {
          model: 'drummers',
          key: 'id',
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('instruments');
  },
};
