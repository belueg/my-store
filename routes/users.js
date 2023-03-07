const express = require('express')
const router = express.Router()
const { faker } = require('@faker-js/faker');

const users = []


//GET USERS
router.get('/', (req, res) => {
  const { limit, offset } = req.query
  const range = limit || 5
  for (let i = 0; i < range; i++) {
    users.push({
      name: faker.name.fullName(),
      email: faker.internet.email(),
      id: faker.datatype.uuid()
    })
  }
  res.json({ users })
})

//GET USER
router.get('/:id', (req, res) => {
  const { id } = req.params

  const user = users.find(user => user.id === id)

  if (user) {
    res.status(200).json(user)
  }
})

//CREATE USER
router.post('/', (req, res) => {
  const body = {
    ...req.body,
    id: faker.datatype.uuid()
  }

  res.json({
    message: 'user created succesfully',
    data: body
  })
})

//UPDATE USER
router.patch('/:id', (req, res) => {
  const { body } = req
  const userIndex = users.findIndex(user => user.id == req.params.id)
  const userUpdated = users[userIndex] = {
    ... users[userIndex],
    ...body
  }
res.json(userUpdated)
})

//DELETE USER
router.delete('/:id', (req, res) => {
  const { body } = req
  console.log(body)
})
module.exports = router;
