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

  edit(body, id) {
    console.log('edit ~ body, id:', body, id)
    const userIndex = this.users.findIndex(user => user.id == id)
    console.log('edit ~ userIndex:', userIndex)

    if (userIndex === -1) {
      throw new boom.notFound('user not found')
    }

    const userUpdated = this.users[userIndex] = {
      ...this.users[userIndex],
      ...body
    }
    return userUpdated
  }

  delete(id) {
    const userIndex = this.users.findIndex(user => user.id == id)

    if (!userIndex) {
      throw new boom.notFound('user not found')
    }

    const deleteUser = this.users.splice(userIndex, 1)
    return deleteUser
  }
}

module.exports = UsersService
