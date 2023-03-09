const boom = require('@hapi/boom')

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property]
    const validation = schema.validate(data)

    const { error } = validation
    if (error) {
      next(boom.badRequest(error))
    }
    next()
  }
}

module.exports = validatorHandler
