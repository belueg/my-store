'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize ) {
    await queryInterface.changeColumn('Customers', 'user_id', {
      field: 'user_id',
      unique: true,
      allowNull: false,
      type: Sequelize.DataTypes.INTEGER,
    });

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
