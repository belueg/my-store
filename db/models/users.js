const { Sequelize, DataTypes } = require('sequelize');

const userSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'customer',

  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
}

module.exports = userSchema;
