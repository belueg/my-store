const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(2).max(30)
const lastName = Joi.string().min(2).max(40)
const email = Joi.string().email()
const phone = Joi.string()
const userId = Joi.number().integer()
const password = Joi.string().min(6).max(30)

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required(),
  })
})

const getCustomerSchema = Joi.object({
  id: id.required()
})

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
  userId
})

module.exports = {
  createCustomerSchema,
  getCustomerSchema,
  updateCustomerSchema
}
