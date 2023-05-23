const express = require('express')
const router = express.Router()
const OrdersService = require('../services/orders.services')
const service = new OrdersService()
const passport = require('passport')

// GET
router.get('/my-orders',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user
      const orders = await service.findByUser(user.id)
      res.status(200).json(orders)
    } catch (error) {
      next(error)
    }
  })

module.exports = router;
