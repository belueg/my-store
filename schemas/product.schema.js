const Joi = require('joi');


//fields
const id = Joi.string().alphanum().guid()
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
  exclusivePremium
})

const getProductSchema = Joi.object({
  id
})

module.exports = {
  createProductSchema,
  getProductSchema,
  updateProductSchema
}
