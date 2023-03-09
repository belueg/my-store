const express = require('express')
const router = express.Router()
const { faker } = require('@faker-js/faker');
const UsersService = require('../services/users.services')
const service = new UsersService()

//GET USERS
router.get('/', (req, res) => {
  const { limit, offset } = req.query
  const users = service.find(limit)
  res.json({ users })
})

//GET USER
router.get('/:id', (req, res) => {
  const { id } = req.params

  const user = service.findOne(id)

  if (user) {
    res.status(200).json(user)
  }
})

//CREATE USER
router.post('/', (req, res) => {

  const newUser = service.create(req.body)
  res.json({
    message: 'user created successfully',
    data: newUser
  })
})

//UPDATE USER
router.patch('/:id', (req, res) => {
  const { body } = req
  const { id } = req.params
  const user = service.edit(body, id)
  res.json({
    message: 'user updated successfully',
    data: user
  })
})

//DELETE USER
router.delete('/:id', (req, res) => {
  const { id } = req.params
  const deleted = service.delete(id)
  res.json({
    message: 'user deleted successfully',
    data: deleted
  })
})
module.exports = router;
