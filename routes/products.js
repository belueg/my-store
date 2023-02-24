const e = require('express')
const express = require('express')
const router = express.Router()
const productsDB = require('../db.json')
const { products } = productsDB
const updateDatabase = require('../modules/updateDatabase')

// GET
router.get('/', (req, res) => {
  res.status(200).json(productsDB)
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  try {
    const product = productsDB.find(product => parseInt(id) == product.id);
    if (product) {
      res.status(200).json(product)
    }
  } catch (error) {
    console.error(error)
    res.status(404).json({
      message: "no se encontro"
    })
  }
  console.log("HOLA")
})

// POST
router.post('/', (req, res) => {
  const body = req.body
  productsDB.push(body)

  const prodList = JSON.stringify(productsDB)

  updateDatabase(prodList)

  res.status(201).json({
    message: 'created',
    data: body
  })
})

//PATCH
router.patch('/:id', (req, res) => {
  const body = req.body

  const productIndex = productsDB.findIndex(product => product.id == req.params.id)

  productsDB[productIndex] = {
    ...productsDB[productIndex],
    name: body.name
  }

  const prodList = JSON.stringify(productsDB)
  updateDatabase(prodList)

  res.status(200).json({
    message: "updated successfully",
    data: body
  })
})

//DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params

  try {
      const newList = productsDB.filter(product => product.id !== parseInt(id))

      const prodList = JSON.stringify(newList)

      updateDatabase(prodList)

      res.status(202).json({
        message: "Element deleted successully",
        id
      })

  } catch (error) {
    console.error(error)
    res.status(404).json({
      message: "Element not found",
      id
    })
  }
})

module.exports = router;
