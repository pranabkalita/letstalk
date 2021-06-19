const express = require('express')

const PostController = require('./../controllers/PostController')

const router = express.Router()

router.get('/', PostController.allPosts)
router.post('/', PostController.createPost)
router.get('/:slug', PostController.getOnePost)
router.patch('/:slug', PostController.updatePost)
router.delete('/:slug', PostController.deletePost)

module.exports = router
