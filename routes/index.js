const productsRouter = require('./products')
const categoriesRouter = require('./categories')
const usersRouter = require('./users')

function routerApi(app) {
  // Chequear si se usa asi lo de api..
  app.use('/api/products', productsRouter)
  app.use('/categories', categoriesRouter)
  app.use('/users', usersRouter)
}

module.exports = routerApi;
