const Joi = require('joi');


//fields
const id = Joi.number()
const name = Joi.string().min(3).max(20)
const price = Joi.number().min(10).max(200000)
const exclusivePremium = Joi.boolean()
const categoryId = Joi.number().integer()
const limit = Joi.number().integer()
const offset = Joi.number().integer()
const price_min = Joi.number().integer()
const price_max = Joi.number().integer()

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  categoryId: categoryId.required(),
  exclusivePremium
})

const updateProductSchema = Joi.object({
  name,
  price,
  categoryId,
  exclusivePremium
})

const getProductSchema = Joi.object({
  id: id.required()
})

const queryProductSchema = Joi.object({
  limit,
  offset,
  price_min,
  price_max,
}).with('price_min', 'price_max').with('price_max', 'price_min')

module.exports = {
  createProductSchema,
  getProductSchema,
  updateProductSchema,
  queryProductSchema
}
