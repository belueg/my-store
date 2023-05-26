const UserService = require('./users.services')
const service = new UserService()
const bcrypt = require('bcrypt')
const boom = require('@hapi/boom')
const nodemailer = require('nodemailer')

class AuthService {
  async getUser(email, password) {
    const user = await service.findbyEmail(email)
    if (!user) {
      throw boom.unauthorized('invalid credentials')
    }

    const passwordMatches = await bcrypt.compare(password, user.password)
    if (!passwordMatches) {
      throw boom.unauthorized('invalid credentials')
    }

    return user
  }

  async sendRecoveryEmail(email) {
    const user = await service.findbyEmail(email)
    console.log("user", user)
    if (!user) {
      throw boom.unauthorized('invalid credentials')
    }

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER_MAILER,
        pass: process.env.PASS_MAILER,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Belu Enterprise" <belu@enterprise.com',
      to: "belg1294@gmail.com",
      subject: "Recover your password",
      text: "Hello, we received a request to recover account",
    });
  }

}

module.exports = AuthService