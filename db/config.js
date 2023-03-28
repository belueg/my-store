require('dotenv').config()

module.exports = {
  development: {
    url: process.env.PG_CONNECTION_STRING,
    dialect: 'postgres',
  },
  production: {
    url: process.env.PG_CONNECTION_STRING,
    dialect: 'postgres',
  }
}
