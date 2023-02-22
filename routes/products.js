const express = require('express')
const router = express.Router()
const productsDB = require('../db.json')
const { products } = productsDB
const updateDatabase = require('../modules/updateDatabase')

router.get('/', (req, res) => {
  res.json(productsDB)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const product = products.find(product => product.id === parseInt(id))
  res.json(product)
})

router.post('/', (req, res) => {
  const body = req.body
  productsDB.push(body)

  const prodList = JSON.stringify(productsDB)

  updateDatabase(prodList)

  res.json({
    message: 'created',
    data: body
  })
})


module.exports = router;
