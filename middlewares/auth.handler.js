const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')

//verify authenticated user
function verifyAuth(req, res, next) {
  try {
    const token = req.headers.authorization
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const tokenValue = token.replace('Bearer ', '');
    const tokenPayload = jwt.verify(tokenValue, process.env.JWT_SECRET)
    next()
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
}

// check roles
function checkRoles(...roles) {
  return (req, res, next) => {
    const user = req.user
    roles.includes(user.role) ? next() : next(boom.unauthorized());
  }
}

module.exports = {
  verifyAuth,
  checkRoles
}





  // const apiKey = req.headers['api']
  // if (apiKey === process.env.API_KEY) {
  //   next()
  // } else {
  //   next(boom.unauthorized())
  // }