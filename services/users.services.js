const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
// const pool = require('../libs/postgres.pool')
const { models } = require('../libs/sequelize')


class UsersService {
  users = []

  constructor() {
    // this.pool = pool
    // this.pool.on('error', (error) => console.error(error))
  }

  async find() {
    // if (limit) {
    //   const usersLimit = this.users.slice(0, limit)
    //   return usersLimit
    // }
    //Consulta a traves de pg pool.
    // const query = 'SELECT * FROM tasks'

    // const response = await this.pool.query(query)
    // return response.rows
    const response = await models.User.findAll()
    return response

  }

  findOne(id) {
    const user = this.users.find(user => user.id === id)

    if (!user) {
      throw new boom.notFound('user not found')
    }
    return user
  }

  create(body) {
    const newUser = {
      ...body,
      id: faker.datatype.uuid()
    }
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
