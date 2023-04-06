const { Sequelize, DataTypes } = require('sequelize');

const orderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
  customerId: {
    field: 'customer_id',
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Customers',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

}

module.exports = orderSchema;
