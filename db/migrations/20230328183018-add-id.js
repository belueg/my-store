const userSchema = require('../models/users.js')

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn('Users', 'id', userSchema.id)
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('Users', 'id')
  }
};
