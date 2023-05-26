const boom = require('@hapi/boom');
const Strategy = require('passport-local');
const AuthService = require('../../../services/auth.services')

const service = new AuthService()

const LocalStrategy = new Strategy({ usernameField: 'email' },
  async (email, password, done) => {
    try {
      const user = await service.getUser(email, password)

      const { id, role } = user.get({ plain: true })

      return done(null, { id, role });

    } catch (error) {
      done(error, false)
    }
  })

module.exports = LocalStrategy;