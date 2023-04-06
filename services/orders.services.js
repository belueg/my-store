const boom = require('@hapi/boom');
// const getConnection = require('../libs/postgres')
const { models } = require('../libs/sequelize')

class OrdersServices {

  async find() {
    const orders = await models.Order.findAll({
      //nested associations
      include: [{
        association: 'customer',
        include: ['user']
      }]
    })
    return orders
  }

  async create(data) {

    const newOrder = await models.Order.create(data)

    return newOrder
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id)

    if (!order) {
      throw new boom.notFound('order not found')
    }
    return order

  }

  async edit(id, data) {
    const order = await this.findOne(id)
    const updatedOrder = await order.update(data)
    return updatedOrder

  }

  async delete(id) {
    const order = await this.findOne(id)

    await order.destroy(id)
    return id
  }
}

module.exports = OrdersServices
