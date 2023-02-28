const express = require('express');
const routerApi = require('./routes/index')
const { logErrors } = require('./middlewares/errorHandlers')


const app = express()
const port = 3001

app.use(express.json())

routerApi(app)


app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})

app.get('/', (req, res) => {
  res.send("Hola bella")
})

//error middleware must be below routing definition
app.use(logErrors)

