const userSchema = require('./users')


function setUpModel(sequelize) {
  sequelize.define('User', userSchema)
}

module.exports = setUpModel
