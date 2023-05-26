const UserService = require('./users.services')
const service = new UserService()
const bcrypt = require('bcrypt')
const boom = require('@hapi/boom')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
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
  async sendRecovery(email) {
    const user = await service.findbyEmail(email)
    if (!user) {
      throw boom.unauthorized('invalid credentials')
    }
    const recoveryToken = await jwt.sign({ sub: user.id }, process.env.JWT_SECRET, { expiresIn: '15min' })
    //Guardar token en DB
    await user.update({ recoveryToken })

    const link = `http://myfrontend.com/recovery?token=${recoveryToken}`

    const response = await this.sendMail({
      from: '"Belu Enterprise" <belu@enterprise.com',
      to: user.email,
      subject: "Recover your password",
      text: `Visit this link in order to recover your password: ${link}`,
    })
    return response
  }

  async sendMail(emailObject) {

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
    let info = await transporter.sendMail(emailObject);
  }

}

module.exports = AuthService