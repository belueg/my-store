const { faker } = require('@faker-js/faker');

class UsersService {
  users = []

  constructor() {
    this.generate()
  }

  generate(limit) {
    const range = limit || 5
    for (let i = 0; i < range; i++) {
      this.users.push({
        name: faker.name.fullName(),
        email: faker.internet.email(),
        id: faker.datatype.uuid()
      })
    }
  }

  find() {
    return this.users
  }

  findOne(id) {
    const user = this.users.find(user => user.id === id)
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
    const userIndex = this.users.findIndex(user => user.id == id)
    const userUpdated = this.users[userIndex] = {
      ...this.users[userIndex],
      ...body
    }
    return userUpdated
  }

  delete(id) {
    const userIndex = this.users.findIndex(user => user.id == id)
    const deleteUser = this.users.splice(userIndex, 1)
    return deleteUser
  }
}

module.exports = UsersService
