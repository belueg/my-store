const { Sequelize } = require('sequelize');

const productSchema = {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
  },
  exclusivePremium: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
}

module.exports = productSchema;
