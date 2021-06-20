// Global Imports
const express = require('express')

// Controller
const PostController = require('./../controllers/PostController')

// Validator
const PostValidator = require('./../validators/PostValidator')

// Middleware
const AuthMiddleware = require('./../middleware/AuthMiddleware')

const router = express.Router()

router.get('/', PostController.allPosts)
router.post(
  '/',
  AuthMiddleware.protect,
  PostValidator.create,
  PostController.createPost
)
router.get('/:slug', PostController.getOnePost)
router.patch('/:slug', AuthMiddleware.protect, PostController.updatePost)
router.delete('/:slug', AuthMiddleware.protect, PostController.deletePost)

module.exports = router
