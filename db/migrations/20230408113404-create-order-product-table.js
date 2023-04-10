'use strict';

const orderProductSchema = require('../models/order-product.js')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('OrderProduct', orderProductSchema);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderProduct');

  }
};
