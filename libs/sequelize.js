const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_CONNECTION_STRING)

const User = sequelize.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

sequelize.sync()
  .then(() => {
    console.log('Modelo sincronizado con la base de datos');
  })
  .catch((error) => {
    console.error('Error al sincronizar el modelo con la base de datos:', error);
  });

module.exports = sequelize

