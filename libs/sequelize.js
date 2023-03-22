const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.PG_CONNECTION_STRING)
const setUpModel = require('../db/models')

setUpModel(sequelize)

sequelize.sync()
  .then(() => {
    console.log('Modelo sincronizado con la base de datos');
  })
  .catch((error) => {
    console.error('Error al sincronizar el modelo con la base de datos:', error);
  });

module.exports = sequelize

