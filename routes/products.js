const express = require('express')
const router = express.Router()
const ProductsService = require('../services/products.services')
const boom = require('@hapi/boom')
const service = new ProductsService()
const validatorHandler = require('../middlewares/validatorHandler')
const { createProductSchema, getProductSchema, updateProductSchema } = require('../schemas/product.schema')

// GET
router.get('/', (req, res, next) => {
  try {
    const products = service.find()
    res.status(200).json(products)
  } catch (error) {
    next(error)
  }

})

router.get('/:id', validatorHandler(getProductSchema, 'params'), (req, res, next) => {
  const { id } = req.params
  try {
    const product = service.findOne(id)

    if (product) {
      return res.status(200).json(product)
    }
  } catch (error) {
    next(error)
  }
})

// POST
router.post('/',
  validatorHandler(createProductSchema, 'body'),
  (req, res, next) => {
    const body = req.body
    try {
      const product = service.create(body)

      res.status(201).json({
        message: 'created',
        data: product
      })
    } catch (error) {
      next(error)
    }

  })

//PATCH
router.patch('/:id', validatorHandler(updateProductSchema, 'body'), (req, res, next) => {
  const body = req.body
  const { id } = req.params


  try {
    const productUpdated = service.edit(body, id)

    res.status(200).json({
      message: "successfully updated",
      data: productUpdated
    })

  } catch (error) {
    next(error)
  }
})

//DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params

  try {
    service.delete(id)

    res.status(202).json({
      message: "Element successfully deleted",
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
