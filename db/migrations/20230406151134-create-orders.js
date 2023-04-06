'use strict';
const ordersSchema = require('../models/orders.js')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {

    await queryInterface.createTable('Orders', ordersSchema);

  },

  async down(queryInterface) {

      await queryInterface.dropTable('Orders');

  }
};
