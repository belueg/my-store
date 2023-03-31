const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize')


class UsersService {
  async find() {
    const response = await models.User.findAll()
    return response

  }

  async findOne(id) {
    const user = await models.User.findByPk(id)
    if (!user) {
      throw new boom.notFound('user not found')
    }
    return user
  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser
  }

  async edit(body, id) {
    const user = await this.findOne(id)
    return await user.update(body)
  }

  async delete(id) {
    const user = await this.findOne(id)
    await user.destroy()
    return id
  }
}

module.exports = UsersService
