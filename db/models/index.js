const productSchema = require('./products')
const userSchema = require('./users')


function setUpModel(sequelize) {
  sequelize.define('User', userSchema)
  sequelize.define('Product', productSchema)

}

module.exports = setUpModel
