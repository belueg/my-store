'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addColumn('OrderProduct', 'amount', {
      allowNull: false,
      type: Sequelize.INTEGER,
    })

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.removeColumn('OrderProduct', 'amount')

  }
};
