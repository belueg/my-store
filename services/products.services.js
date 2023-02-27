const { faker } = require('@faker-js/faker');

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
        id: faker.datatype.uuid()
      })
    }
  }

  create(data) {

    const { name, category, price } = data
    const newProduct = {
      name,
      category,
      price,
      id: faker.datatype.uuid()
    }

    this.products.push(newProduct)
    return newProduct
  }

  find() {
    return this.products
  }

  findOne(id) {
    return this.products.find(product => id === product.id);
  }

  edit(data, id) {
    const productIndex = this.products.findIndex(product => product.id == id)
    if (productIndex === -1) {
      throw new Error('product not found')
    }

    return this.products[productIndex] = {
      ...this.products[productIndex],
      ...data
    }

  }

  //Quizas en vez de generar un nuevo array filtrado, convenga hacer un splice, y eliminar el elemento que queremos.
  delete(id) {
    this.products.filter(product => product.id !== id)
  }
}

module.exports = ProductsService
