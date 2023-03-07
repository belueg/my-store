const boom = require('@hapi/boom')

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property]

    const validation = schema.validate(data)
    console.log(validation)

    if (validation.error) {
      next(boom.badRequest(validation.error))
    }
    next()
  }
}

module.exports = validatorHandler
