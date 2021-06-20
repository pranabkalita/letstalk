const express = require('express')

// COntrollers
const AuthController = require('./../controllers/AuthController')

// Validators
const AuthValidator = require('./../validators/AuthValidator')

const router = express.Router()

router.post('/sign-up', AuthValidator.register, AuthController.signUp)
router.post('/sign-in', AuthController.signIn)
router.post('/sign-out', AuthController.signOut)

module.exports = router
