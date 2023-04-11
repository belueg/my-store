'use strict';

const productSchema = require('../models/products')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addColumn('Products', 'image', productSchema.image)

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.removeColumn('Products', 'image')

  }
};
