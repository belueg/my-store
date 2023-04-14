const express = require('express')
const router = express.Router()
const ProductsService = require('../services/products.services')
const boom = require('@hapi/boom')
const service = new ProductsService()
const validatorHandler = require('../middlewares/validatorHandler')
const { createProductSchema, getProductSchema, updateProductSchema, queryProductSchema } = require('../schemas/product.schema')

// GET
router.get('/',
  validatorHandler(queryProductSchema, 'query'),
  async (req, res, next) => {
    try {
      const products = await service.find(req.query)
      res.status(200).json(products)
    } catch (error) {
      next(error)
    }
  })

router.get('/:id', validatorHandler(getProductSchema, 'params'), async (req, res, next) => {
  const { id } = req.params
  try {
    const product = await service.findOne(id)

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
  async (req, res, next) => {
    const body = req.body
    try {
      const product = await service.create(body)
      res.status(201).json({
        message: 'created',
        data: product
      })
    } catch (error) {
      next(error)
    }

  })


//PATCH
router.patch('/:id', validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    const body = req.body
    const { id } = req.params

    try {
      const productUpdated = await service.edit(id, body)

      res.status(200).json({
        message: "successfully updated",
        data: productUpdated
      })

    } catch (error) {
      next(error)
    }
  })

//DELETE
router.delete('/:id', validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params

    try {
      await service.delete(id)

      res.status(202).json({
        message: "Element successfully deleted",
        id
      })

    } catch (error) {
      next(error)
    }
  })

module.exports = router;
