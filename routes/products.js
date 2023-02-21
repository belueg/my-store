const express = require('express')
const router = express.Router()
const data = require('../data.js')

const { products } = data

router.get('/', (req, res) => {
  res.json(products)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const product = products.find(product => product.id === parseInt(id))
  res.json(product)
})

module.exports = router;
