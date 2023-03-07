const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductsService {
  products = []
  constructor() {
    this.generate()
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

  find() {
    return this.products
  }

  findOne(id) {
    const product = this.products.find(product => id === product.id);

    if (!product) {
      throw new boom.notFound('product not found')
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
