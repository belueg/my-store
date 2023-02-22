const express = require('express')
const router = express.Router()
const { faker } = require('@faker-js/faker');

const users = []

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

module.exports = router;
