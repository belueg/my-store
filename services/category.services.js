const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize')


class CategoriesService {
  categories = []


  async find() {
    const response = await models.User.findAll()
    return response
  }

  findOne(id) {
    const category = this.categories.find(category => category.id === id)

    if (!category) {
      throw new boom.notFound('category not found')
    }
    return category
  }

  create(body) {
    const newCategory = {
      ...body,
      id: faker.datatype.uuid()
    }
    return newCategory
  }

  edit(body, id) {
    const categoryIndex = this.categories.findIndex(category => category.id == id)

    if (categoryIndex === -1) {
      throw new boom.notFound('category not found')
    }

    const categoryUpdated = this.categories[categoryIndex] = {
      ...this.categories[categoryIndex],
      ...body
    }
    return categoryUpdated
  }

  delete(id) {
    const categoryIndex = this.categories.findIndex(category => category.id == id)

    if (!categoryIndex) {
      throw new boom.notFound('category not found')
    }

    const deleteCategory = this.categories.splice(categoryIndex, 1)
    return deleteCategory
  }
}

module.exports = CategoriesService
