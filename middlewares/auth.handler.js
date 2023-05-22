const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')
function verifyAuth(req, res, next) {
  try {
    const token = req.headers.authorization
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const tokenValue = token.replace('Bearer ', '');
    const verifyToken = jwt.verify(tokenValue, process.env.JWT_SECRET)
    console.log(verifyToken)
    next()
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
}

module.exports = { verifyAuth }





  // const apiKey = req.headers['api']
  // if (apiKey === process.env.API_KEY) {
  //   next()
  // } else {
  //   next(boom.unauthorized())
  // }