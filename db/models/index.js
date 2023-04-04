const categorySchema = require('./category')
const productSchema = require('./products')
const userSchema = require('./users')
const customerSchema = require('./customers')


function setUpModel(sequelize) {
  const User = sequelize.define('User', userSchema)
  const Product = sequelize.define('Product', productSchema)
  const Category = sequelize.define('Category', categorySchema)
  const Customer = sequelize.define('Customer', customerSchema)

  Customer.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'users'
  });
}



module.exports = setUpModel
