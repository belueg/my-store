const boom = require('@hapi/boom');
// const getConnection = require('../libs/postgres')
const { models } = require('../libs/sequelize')
const { Op } = require('sequelize')
class ProductsService {

  async find(query) {
    const options = {
      include: ['category'],
      where: {}
    }

    const { limit, offset, price_min, price_max } = query

    if (limit && offset) {
      options.limit = limit
      options.offset = offset
    }

    if (price_min && price_max) {
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max
      }
    }

    const products = await models.Product.findAll(options)
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
