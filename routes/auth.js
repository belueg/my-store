const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const AuthService = require('../services/auth.services')
const authServ = new AuthService()

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


router.post('/recovery',
  async (req, res, next) => {
    try {
      // chequear que su mail exista en la db y enviar correo para recuperar contraseña
      const { email } = req.body
      await authServ.sendRecoveryEmail(email)

      res.json({ message: "Email sent!" })

    } catch (error) {
      next(error)
    }
  }
)

module.exports = router;
