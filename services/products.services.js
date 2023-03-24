const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
// const getConnection = require('../libs/postgres')
const sequelize = require('../libs/sequelize')
const { models } = require('../libs/sequelize')

class ProductsService {

  async find() {
    const products = await models.Product.findAll()
    return products
  }

  async create(data) {

    const newProduct = await models.Product.create(data)

    return newProduct
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id)

    if (!product) {
      throw new boom.notFound('product not found')
    }
    return product

  }

  async edit(id, data) {
    const product = await this.findOne(id)
    console.log(product)
    const updatedProduct = await product.update(data)
    return updatedProduct

  }

  async delete(id) {
    const product = await this.findOne(id)

    await product.destroy(id)
    return id
  }
}

module.exports = ProductsService
