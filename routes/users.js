const express = require('express')
const router = express.Router()
const { faker } = require('@faker-js/faker');

router.get('/', (req, res) => {
  const { limit, offset } = req.query
  const users = []
  const range = limit || 100
  for (let i = 0; i < range; i++) {
    users.push({
      name: faker.name.fullName(),
      email: faker.internet.email(),
      id: faker.datatype.uuid()
    })
  }
  res.json({ users })

})

module.exports = router;
