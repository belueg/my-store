const userSchema = require('../models/users.js')
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {

    await queryInterface.addColumn('users', 'role', userSchema.role)
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('users', 'role')
  }
};
