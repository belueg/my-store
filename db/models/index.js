const categorySchema = require('./categories')
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
    as: 'user'
  });

  Category.hasMany(Product, {
    as: 'products',
    foreignKey: 'category_id'
  })

  Product.belongsTo(Category, { as: 'category' })
}



module.exports = setUpModel
