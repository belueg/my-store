const Joi = require('joi');


//fields
const id = Joi.number()
const name = Joi.string().min(3).max(20)
const price = Joi.number().min(10).max(200000)
const exclusivePremium = Joi.boolean()
const category = Joi.string()

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  category: category.required(),
  exclusivePremium
})

const updateProductSchema = Joi.object({
  name,
  price,
  category,
  exclusivePremium
})

const getProductSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createProductSchema,
  getProductSchema,
  updateProductSchema
}
