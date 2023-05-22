const jwt = require('jsonwebtoken')



const token = jwt.sign({
  name: 'Michu',
  age: 3
}, 'secret')

console.log(token)

const tokenVerify = jwt.verify(token, 'secret')
console.log(tokenVerify)