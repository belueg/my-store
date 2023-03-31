const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize')


class CustomersService {

  async find() {
    const response = await models.Customer.findAll()
    return response

  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id)
    if (!customer) {
      throw new boom.notFound('customer not found')
    }
    return customer
  }

  async create(data) {
    const newCustomer = await models.Customer.create(data);
    return newCustomer
  }

  async edit(body, id) {
    const customer = await this.findOne(id)

    return await customer.update(body)
  }

  async delete(id) {
    const customer = await this.findOne(id)
    await customer.destroy()
    return id
  }
}

module.exports = CustomersService
