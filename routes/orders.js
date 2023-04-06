const express = require('express')
const router = express.Router()
const OrdersService = require('../services/orders.services')
const service = new OrdersService()
const validatorHandler = require('../middlewares/validatorHandler')
const { createOrderSchema, getOrderSchema, updateOrderSchema } = require('../schemas/order.schema')

// GET
router.get('/', async (req, res, next) => {
  try {
    const orders = await service.find()
    res.status(200).json(orders)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', validatorHandler(getOrderSchema, 'params'), async (req, res, next) => {
  const { id } = req.params
  try {
    const order = await service.findOne(id)

    if (order) {
      return res.status(200).json(order)
    }
  } catch (error) {
    next(error)
  }
})

// POST
router.post('/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    const body = req.body
    try {
      const order = await service.create(body)
      res.status(201).json({
        message: 'created',
        data: order
      })
    } catch (error) {
      next(error)
    }

  })


//PATCH
router.patch('/:id', validatorHandler(getOrderSchema, 'params'),
  validatorHandler(updateOrderSchema, 'body'),
  async (req, res, next) => {
    const body = req.body
    const { id } = req.params

    try {
      const orderUpdated = await service.edit(id, body)

      res.status(200).json({
        message: "successfully updated",
        data: orderUpdated
      })

    } catch (error) {
      next(error)
    }
  })

//DELETE
router.delete('/:id', validatorHandler(getOrderSchema, 'params'),
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
