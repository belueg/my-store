const express = require('express')
const { categories } = require('../data.js')
const router = express.Router()

router.get('/', (req, res) => {
  res.json(categories)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const category = categories.find(category => category.id === parseInt(id))
  res.json(category)
})

module.exports = router
