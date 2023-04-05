const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize')


class CustomersService {

  async find() {
    const response = await models.Customer.findAll({
      include: ['user']
    })
    return response

  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id, {
      include: ['user']
    })

    if (!customer) {
      throw new boom.notFound('customer not found')
    }

    return customer
  }

  async create(data) {
    const newUser = await models.User.create(data.user);
    const newCustomer = await models.Customer.create({
      ...data,
      userId: newUser.id
    });
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
