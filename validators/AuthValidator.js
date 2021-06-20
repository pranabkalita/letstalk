const validator = require('express-validator')

exports.register = [
  validator.check('name', 'A user must have a name.').notEmpty(),
  validator.check('email', 'A user must have an email').isEmail(),
  validator.check('password', 'A user must have a password.').notEmpty(),
  validator
    .check('passwordConfirm', 'Please confirm your password.')
    .custom(async (confirmPassword, { req }) => {
      const { password } = req.body

      if (password !== confirmPassword) {
        throw new Error('Passwords must match.')
      }
    }),
]

exports.login = [
  validator.check('email', 'Please enter your email.').isEmail(),
  validator.check('password', 'Please enter you password.').notEmpty(),
]
