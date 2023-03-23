const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const { CommandCompleteMessage } = require('pg-protocol/dist/messages');
// const pool = require('../libs/postgres.pool')
const { models } = require('../libs/sequelize')


class UsersService {
  users = []

  constructor() {
    // this.pool = pool
    // this.pool.on('error', (error) => console.error(error))
  }

  async find() {
    const response = await models.User.findAll()
    return response

  }

  async findOne(id) {
    console.log(id)
    const user = await models.User.findByPk(id)
    console.log(user)
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

    if (!user) {
      throw new boom.notFound('user not found')
    }

    return await user.update(body)
  }

  async delete(id) {
    const user = await this.findOne(id)

    if (!user) {
      throw new boom.notFound('user not found')
    }
    await user.destroy()
    return id
  }
}

module.exports = UsersService
