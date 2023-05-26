'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Orders', 'updatedAt', {
      type: Sequelize.DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Orders', 'updatedAt')
  }
};
