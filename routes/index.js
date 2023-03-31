const express = require('express')
const productsRouter = require('./products')
const usersRouter = require('./users')
const categoriesRouter = require('./categories')
const customersRouter = require('./customers')


function routerApi(app) {
  const router = express.Router()

  app.use('/api', router)
  router.use('/products', productsRouter)
  router.use('/users', usersRouter)
  router.use('/categories', categoriesRouter)
  router.use('/customers', customersRouter)


}

module.exports = routerApi;
