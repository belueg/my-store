const Joi = require('joi');


//fields
const id = Joi.number()
const customerId = Joi.number().integer()
const orderId = Joi.number()
const productId = Joi.number()
const amount = Joi.number().integer()

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
})

const updateOrderSchema = Joi.object({
  id: id.required()
})

const getOrderSchema = Joi.object({
  id: id.required()
})

const addItemSchema = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required()

})
module.exports = {
  createOrderSchema,
  getOrderSchema,
  updateOrderSchema,
  addItemSchema
}
