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

router.post('/', (req, res) => {
  const body = req.body
  res.json({
    message: 'Category created successfully',
    data: body
  })
})

module.exports = router
