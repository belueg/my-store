const boom = require('@hapi/boom');
const bcrypt = require('bcrypt')
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


  async findbyEmail(email) {
    const user = await models.User.findOne({ where: { email } })

    return user
  }

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await models.User.create({
      ...data,
      password: hash
    });

    delete newUser.dataValues.password
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
