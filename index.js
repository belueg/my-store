const express = require('express');
const data = require('./data')
const app = express()
const port = 3001

const { categories, products } = data

app.get('/', (req, res) => {
  res.send("Hola bella")
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})


app.get('/products', (req, res) => {
  res.json(products)
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params
  const product = products.find(product => product.id === parseInt(id))
  res.json(product)
})

app.get('/categories', (req, res) => {
  res.json(categories)
})

app.get('/categories/:id', (req, res) => {
  const { id } = req.params
  const category = categories.find(category => category.id === parseInt(id))
  res.json(category)
})

app.get
