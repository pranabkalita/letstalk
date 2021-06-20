const validator = require('express-validator')
const jwt = require('jsonwebtoken')

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

    user.password = undefined
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

exports.signIn = async (req, res) => {
  // 1. Check for validation
  const errors = validator.validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'fail',
      data: {
        errors: errors.array(),
      },
    })
  }

  // 2. Check if the user exists and the password is correct
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user || !(await user.comparePasswords(password, user.password))) {
    return res.status(401).json({
      status: 'fail',
      data: {
        message: 'Invalid email or password !',
      },
    })
  }

  // 3. If everything okay create JWT
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })

  // 4. Send response to the client
  user.password = undefined
  res.status(200).json({
    status: 'success',
    token,
    data: {
      user,
    },
  })
}

exports.signOut = (req, res) => {
  res.send('Sign Out')
}
