const express = require('express')
const router = express.Router()
//const ProductsService = require('../services/products.services')
//const service = new ProductsService()
const validatorHandler = require('../middlewares/validatorHandler')
const { createCategorySchema, getCategorySchema, updateCategorySchema } = require('../schemas/category.schema')

// GET
router.get('/', async (req, res, next) => {
  try {
    const categories = await service.find()
    console.log(categories)
    res.status(200).json(categories)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', validatorHandler(getCategorySchema, 'params'), (req, res, next) => {
  const { id } = req.params
  try {
    const category = service.findOne(id)

    if (category) {
      return res.status(200).json(category)
    }
  } catch (error) {
    next(error)
  }
})

// POST
router.post('/',
  validatorHandler(createCategorySchema, 'body'),
  (req, res, next) => {
    const body = req.body
    try {
      const category = service.create(body)

      res.status(201).json({
        message: 'created',
        data: category
      })
    } catch (error) {
      next(error)
    }

  })

//PATCH
router.patch('/:id', validatorHandler(updateCategorySchema, 'body'), (req, res, next) => {
  const body = req.body
  const { id } = req.params


  try {
    const categoryUpdated = service.edit(body, id)

    res.status(200).json({
      message: "successfully updated",
      data: categoryUpdated
    })

  } catch (error) {
    next(error)
  }
})

//DELETE
router.delete('/:id', (req, res, next) => {
  const { id } = req.params

  try {
    service.delete(id)

    res.status(202).json({
      message: "Element successfully deleted",
      id
    })

  } catch (error) {
    next(error)
  }
})

module.exports = router;
