const express = require('express')
const router = express.Router()
const CategoriesService = require('../services/categories.services')
const service = new CategoriesService()
const validatorHandler = require('../middlewares/validatorHandler')
const { createCategorySchema, getCategorySchema, updateCategorySchema } = require('../schemas/category.schema')
const { checkRoles } = require('../middlewares/auth.handler')
const passport = require('passport')

// GET
router.get('/', async (req, res, next) => {
  try {
    const categories = await service.find()
    res.status(200).json(categories)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', validatorHandler(getCategorySchema, 'params'), async (req, res, next) => {
  const { id } = req.params
  try {
    const category = await service.findOne(id)

    if (category) {
      return res.status(200).json(category)
    }
  } catch (error) {
    next(error)
  }
})

// POST
router.post('/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    const body = req.body
    try {
      const category = await service.create(body)
      res.status(201).json({
        message: 'created',
        data: category
      })
    } catch (error) {
      next(error)
    }

  })

//PATCH
router.patch('/:id', validatorHandler(getCategorySchema, 'params'),
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    const body = req.body
    const { id } = req.params


    try {
      const categoryUpdated = await service.edit(body, id)
      res.status(200).json({
        message: "successfully updated",
        data: categoryUpdated
      })

    } catch (error) {
      next(error)
    }
  })

//DELETE
router.delete('/:id', validatorHandler(getCategorySchema, 'params'),
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  async (req, res, next) => {
    const { id } = req.params

    try {
      await service.delete(id)
      res.status(202).json({
        message: "Category successfully deleted",
        id
      })

    } catch (error) {
      next(error)
    }
  })

module.exports = router;
