const Joi = require('joi');


//fields
const id = Joi.number()
const customerId = Joi.number().integer()

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
})

const updateOrderSchema = Joi.object({
  id: id.required()
})

const getOrderSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createOrderSchema,
  getOrderSchema,
  updateOrderSchema
}
