const express = require('express')

const PostController = require('./../controllers/PostController')

const router = express.Router()

router.get('/', PostController.allPosts)
router.post('/', PostController.createPost)
router.get('/:id', PostController.getOnePost)
router.patch('/:id', PostController.updatePost)
router.delete('/:id', PostController.deletePost)

module.exports = router
