const categorySchema = require('./categories')
const productSchema = require('./products')
const userSchema = require('./users')
const customerSchema = require('./customers')
const orderSchema = require('./orders')
const orderProductSchema = require('./order-product.js')

function setUpModel(sequelize) {
  const User = sequelize.define('User', userSchema)
  const Product = sequelize.define('Product', productSchema)
  const Category = sequelize.define('Category', categorySchema)
  const Customer = sequelize.define('Customer', customerSchema)
  const Order = sequelize.define('Order', orderSchema)
  const OrderProduct = sequelize.define('OrderProduct', orderProductSchema, {
    tableName: 'OrderProduct'
  })

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

  Order.belongsToMany(Product, {
    through: OrderProduct, as: 'items',
    foreignKey: 'order_id',
    otherKey: 'product_id'
  });

  Product.belongsToMany(Order, {
    through: OrderProduct, as: 'items',
    foreignKey: 'order_id',
    otherKey: 'product_id'
  });

}


module.exports = setUpModel
