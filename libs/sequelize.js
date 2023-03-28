const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.PG_CONNECTION_STRING, {
  dialect: 'postgres',
  logging: () => true
})
const setUpModel = require('../db/models')

setUpModel(sequelize)


module.exports = sequelize

