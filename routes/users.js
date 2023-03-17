const express = require('express')
const router = express.Router()
const UsersService = require('../services/users.services')
const service = new UsersService()
const validadorHandler = require('../middlewares/validatorHandler')
const { createUserSchema, getUserSchema, updateUserSchema } = require('../schemas/users.schema')

//GET USERS
router.get('/', async (req, res, next) => {
  const { limit, offset } = req.query

  try {
    const users = await service.find()
    res.json({ users })
  } catch (error) {
    next(error)
  }

})

//GET USER
router.get('/:id', validadorHandler(getUserSchema, 'params'), (req, res, next) => {
  const { id } = req.params

  try {
    const user = service.findOne(id)
    res.status(200).json(user)

  } catch (error) {
    next(error)
  }
})

//CREATE USER
router.post('/', validadorHandler(createUserSchema, 'body'), (req, res, next) => {

  try {
    const newUser = service.create(req.body)
    res.json({
      message: 'user created successfully',
      data: newUser
    })
  } catch (error) {
    next(error)
  }

})

//UPDATE USER
router.patch('/:id',
  validadorHandler(getUserSchema, 'params'),
  validadorHandler(updateUserSchema, 'body'),
  (req, res, next) => {
    const { body } = req
    const { id } = req.params

    try {
      const user = service.edit(body, id)
      res.json({
        message: 'user updated successfully',
        data: user
      })
    } catch (error) {
      next(error)
    }

  })

//DELETE USER
router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  try {
    const deleted = service.delete(id)
    res.json({
      message: 'user deleted successfully',
      data: deleted
    })
  } catch (error) {
    next(error)
  }

})
module.exports = router;
