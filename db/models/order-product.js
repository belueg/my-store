const { Sequelize, DataTypes } = require('sequelize');

const orderProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  amount: {
    allowNull: false,
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
  orderId: {
    field: 'order_id',
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Orders',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  productId: {
    field: 'product_id',
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Products',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

module.exports = orderProductSchema;
