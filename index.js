require('dotenv').config()
const express = require('express');
const routerApi = require('./routes/index')
const { logErrors, errorHandler, boomErrorHandler, validationError } = require('./middlewares/errorHandlers')


const app = express()
const port = 3001

app.use(express.json())

routerApi(app)


app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})

app.get('/', (req, res) => {
  res.send("Hola")
})

//error middleware must be below routing definition and order between them is important
app.use(logErrors)
app.use(boomErrorHandler)
app.use(validationError)
app.use(errorHandler)

