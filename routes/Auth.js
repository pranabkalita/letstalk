const express = require('express')

// COntrollers
const AuthController = require('./../controllers/AuthController')

// Validators
const AuthValidator = require('./../validators/AuthValidator')

// Middleware
const AuthMiddleware = require('./../middleware/AuthMiddleware')

const router = express.Router()

router.get('/me', AuthMiddleware.protect, AuthController.me)
router.post('/sign-up', AuthValidator.register, AuthController.signUp)
router.post('/sign-in', AuthValidator.login, AuthController.signIn)
router.post('/sign-out', AuthController.signOut)

module.exports = router
