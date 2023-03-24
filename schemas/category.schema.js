const Joi = require('joi');


//fields
const id = Joi.number()
const name = Joi.string().min(3).max(20)

const createCategorySchema = Joi.object({
  name: name.required(),
})

const updateCategorySchema = Joi.object({
  name: name.required(),
})

const getCategorySchema = Joi.object({
  id: id.required()
})

module.exports = {
  createCategorySchema,
  getCategorySchema,
  updateCategorySchema
}
