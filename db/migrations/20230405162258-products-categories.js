'use strict';
const productSchema = require('../models/products.js')
const categorySchema = require('../models/categories.js')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('Categories', categorySchema);
    await queryInterface.createTable('Products', productSchema);

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('Categories');
    await queryInterface.dropTable('Products');


  }
};
