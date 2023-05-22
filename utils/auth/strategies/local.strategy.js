const boom = require('@hapi/boom');
const Strategy = require('passport-local');
const UserService = require('../../../services/users.services')
const bcrypt = require('bcrypt')

const service = new UserService()

const LocalStrategy = new Strategy({ usernameField: 'email' }, async (email, password, done) => {
  try {
    const user = await service.findbyEmail(email)
    if (!user) {
      done(boom.unauthorized('invalid credentials'), false)
    }

    const passwordMatches = await bcrypt.compare(password, user.password)
    if (!passwordMatches) {
      done(boom.unauthorized('invalid credentials'), false)
    }
    const { id, role } = user.get({ plain: true })
    return done(null, { id, role });
  } catch (error) {
    done(error, false)
  }
})

module.exports = LocalStrategy;