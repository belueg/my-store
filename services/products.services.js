const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres')
const sequelize = require('../libs/sequelize')
class ProductsService {
  products = []
  constructor() {
    this.generate()
  }


  async find() {
    //client connection and query with PG
    // const client = await getConnection()
    // const query = await client.query('SELECT * FROM tasks')
    // return query.rows

    //example with sequalize
    const query = 'SELECT * FROM tasks'

    const response = await sequelize.query(query)

    return response[0]
  }


  generate() {
    for (let i = 0; i < 10; i++) {
      this.products.push({
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
        id: faker.datatype.uuid(),
        exclusivePremium: faker.datatype.boolean()

      })
    }
  }

  create(data) {

    const { name, category, price } = data
    console.log(data)
    const newProduct = {
      name,
      category,
      price,
      id: faker.datatype.uuid(),
      exclusivePremium: faker.datatype.boolean()
    }

    this.products.push(newProduct)
    return newProduct
  }

  findOne(id, isPremium) {
    const product = this.products.find(product => id === product.id);

    if (!product) {
      throw new boom.notFound('product not found')
    }

    if (product.exclusivePremium) {
      if (isPremium) {
        product
      } else {
        throw new boom.conflict('There is a conflict')
      }
    }
    return product

  }

  edit(data, id) {
    const productIndex = this.products.findIndex(product => product.id == id)
    if (productIndex === -1) {
      throw new boom.notFound('product not found')
    }

    return this.products[productIndex] = {
      ...this.products[productIndex],
      ...data
    }

  }

  delete(id) {
    const productIndex = this.products.findIndex(product => product.id == id)
    if (productIndex === -1) {
      throw new boom.notFound('product not found')
    }
    return this.products.splice(productIndex, 1)
  }
}

module.exports = ProductsService
