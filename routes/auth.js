const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const token = `Bearer ${jwt.sign(req.user, process.env.JWT_SECRET)}`
      res.json({ token })
    } catch (error) {
      next(error)
    }
  }
)




module.exports = router;
