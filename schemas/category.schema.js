const Joi = require('joi');


//fields
const id = Joi.string().guid()
const name = Joi.string().min(3).max(20)

const createCategorySchema = Joi.object({
  name: name.required(),
})

const updateCategorySchema = Joi.object({
  name,
})

const getCategorySchema = Joi.object({
  id: id.required()
})

module.exports = {
  createCategorySchema,
  getCategorySchema,
  updateCategorySchema
}
