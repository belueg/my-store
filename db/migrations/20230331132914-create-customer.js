const customerSchema = require('../models/customers')

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
