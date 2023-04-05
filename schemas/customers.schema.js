const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(2).max(30)
const lastName = Joi.string().min(2).max(40)
const email = Joi.string().email()
const phone = Joi.string()
const userId = Joi.number().integer()

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  userId: userId.required()
})

const getCustomerSchema = Joi.object({
  id: id.required()
})

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  phone
})

module.exports = {
  createCustomerSchema,
  getCustomerSchema,
  updateCustomerSchema
}
