function logErrors(err, req, res, next) {
  console.error(err.message)
  next(err)
}


function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const payload = err.output.payload
    return res.status(payload.statusCode).json(payload)
  }
  next(err)
}

function errorHandler(err, req, res, next) {
  console.log(err)
  res.status(500).json({
    error: 'Hubo un problema'
  })
}


module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler
}
