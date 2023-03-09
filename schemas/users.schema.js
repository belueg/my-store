const Joi = require('joi');

const id = Joi.string().guid()
const name = Joi.string().min(2).max(30)
const email = Joi.string().email()


const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required()
})

const getUserSchema = Joi.object({
  id: id.required()
})

const updateUserSchema = Joi.object({
  name,
  email
})

module.exports = {
  createUserSchema,
  getUserSchema,
  updateUserSchema
}
