const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize')

class CategoriesService {
  categories = []


  async find() {
    const response = await models.Category.findAll()
    console.log(response)
    return response
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id, {
      include: ['products']
    })

    if (!category) {
      throw new boom.notFound('category not found')
    }
    return category
  }

  async create(body) {
    const newCategory = await models.Category.create(body)
    return newCategory
  }

  async edit(body, id) {
    const category = await this.findOne(id)
    const categoryUpdated = await category.update(body)
    return categoryUpdated
  }

  async delete(id) {
    const category = await this.findOne(id)
    await category.destroy(id)
    return id
  }
}

module.exports = CategoriesService
