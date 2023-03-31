const userSchema = require('../models/users')

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {

    await queryInterface.createTable('Users', userSchema);

  },

  async down(queryInterface) {

    await queryInterface.dropTable('Users');

  }
};
