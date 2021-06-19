// Global Imports
const express = require('express')

// Controller
const PostController = require('./../controllers/PostController')

// Validator
const PostValidator = require('./../validators/PostValidator')

const router = express.Router()

router.get('/', PostController.allPosts)
router.post('/', PostValidator.create, PostController.createPost)
router.get('/:slug', PostController.getOnePost)
router.patch('/:slug', PostController.updatePost)
router.delete('/:slug', PostController.deletePost)

module.exports = router
