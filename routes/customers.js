const express = require('express')
const router = express.Router()
const CustomersService = require('../services/customers.services')
const service = new CustomersService()
const validadorHandler = require('../middlewares/validatorHandler')
const { createCustomerSchema, getCustomerSchema, updateCustomerSchema } = require('../schemas/customers.schema')

//GET CUSTOMERS
router.get('/', async (req, res, next) => {

  try {
    const customers = await service.find()
    res.json({ customers })
  } catch (error) {
    next(error)
  }

})

//GET CUSTOMER
router.get('/:id',
  validadorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params

    try {
      const customer = await service.findOne(id)
      res.status(200).json(customer)

    } catch (error) {
      next(error)
    }
  })

//CREATE CUSTOMER
router.post('/',
  validadorHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const newCustomer = await service.create(req.body)
      res.json({
        message: 'customer created successfully',
        data: newCustomer
      })
    } catch (error) {
      next(error)
    }
  })

//UPDATE CUSTOMER
router.patch('/:id',
  validadorHandler(getCustomerSchema, 'params'),
  validadorHandler(updateCustomerSchema, 'body'),
  (req, res, next) => {
    const { body } = req
    const { id } = req.params

    try {
      const customer = service.edit(body, id)
      res.json({
        message: 'customer updated successfully',
        data: customer
      })
    } catch (error) {
      next(error)
    }
  })

//DELETE CUSTOMER
router.delete('/:id',
  validadorHandler(getCustomerSchema, 'params'),
  (req, res, next) => {
    const { id } = req.params
    try {
      const deleted = service.delete(id)
      res.json({
        message: 'customer deleted successfully',
        data: deleted
      })
    } catch (error) {
      next(error)
    }
  })
module.exports = router;
