const express = require('express');

const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send("Hola bella")
})

app.listen(port, () =>{
  console.log(`http://localhost:${port}/`)
})
