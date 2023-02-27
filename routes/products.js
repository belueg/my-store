const express = require('express')
const router = express.Router()
const ProductsService = require('../services/products.services')

const service = new ProductsService()

// GET
router.get('/', (req, res) => {
  const products = service.find()
  res.status(200).json(products)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  try {
    const product = service.findOne(id)
    if (product) {
      res.status(200).json(product)
    }
  } catch (error) {
    res.status(404).json({
      message: "no se encontro"
    })
  }
})

// POST
router.post('/', (req, res) => {
  const body = req.body
  const product = service.create(body)

  res.status(201).json({
    message: 'created',
    data: product
  })
})

//PATCH
router.patch('/:id', (req, res) => {
  const body = req.body
  const { id } = req.params

  const productUpdated = service.edit(body, id)

  res.status(200).json({
    message: "successfuly updated",
    data: productUpdated
  })
})

//DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params

  try {
    service.delete(id)

    res.status(202).json({
      message: "Element successfuly deleted",
      id
    })

  } catch (error) {
    console.error(error)
    res.status(404).json({
      message: "Element not found",
      id
    })
  }
})

module.exports = router;
