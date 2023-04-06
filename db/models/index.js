const categorySchema = require('./categories')
const productSchema = require('./products')
const userSchema = require('./users')
const customerSchema = require('./customers')
const orderSchema = require('./orders')


function setUpModel(sequelize) {
  const User = sequelize.define('User', userSchema)
  const Product = sequelize.define('Product', productSchema)
  const Category = sequelize.define('Category', categorySchema)
  const Customer = sequelize.define('Customer', customerSchema)
  const Order = sequelize.define('Order', orderSchema)

  Customer.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
  });

  Category.hasMany(Product, {
    as: 'products',
    foreignKey: 'category_id'
  })

  Product.belongsTo(Category, { as: 'category' })

  Customer.hasMany(Order, {
    as: 'orders',
    foreignKey: 'customer_id'
  })

  Order.belongsTo(Customer, {
    as: 'customer'
  })
}



module.exports = setUpModel
