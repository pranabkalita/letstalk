const validator = require('express-validator')

const User = require('./../models/User')

exports.signUp = async (req, res) => {
  try {
    const errors = validator.validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'fail',
        data: {
          errors: errors.array(),
        },
      })
    }

    const { name, email, password } = req.body
    const user = await User.create({ name, email, password })

    res.status(201).json({
      status: 'success',
      data: {
        user,
      },
    })
  } catch (error) {
    console.warn('Error: ', error)

    res.status(400).json({
      status: 'fail',
      message: 'Failed creating post !',
    })
  }
}

exports.signIn = (req, res) => {
  res.send('Sign In')
}

exports.signOut = (req, res) => {
  res.send('Sign Out')
}
