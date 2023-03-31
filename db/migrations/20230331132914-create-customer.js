const customerSchema = require('../models/customers')
const userSchema = require('../models/users')

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Customers', customerSchema)

  },

  async down(queryInterface) {
    await queryInterface.dropTable('Customers');
  }
};
