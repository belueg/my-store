const { Sequelize, DataTypes } = require('sequelize');

const productSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  exclusivePremium: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  image: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
  categoryId: {
    field: 'category_id',
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Categories',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

}

module.exports = productSchema;
