const { Sequelize } = require('sequelize');

const categorySchema = {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
}

module.exports = categorySchema;
