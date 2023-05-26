'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addColumn('Users', 'recovery_token', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
      field: 'recovery_token'
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.removeColumn('Users', 'recovery_token');

  }
};
