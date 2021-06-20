const validator = require('express-validator')
const Post = require('./../models/Post')

exports.allPosts = async (req, res) => {
  try {
    const posts = await Post.find({ isPublished: true }).sort('-createdAt')

    res.status(200).json({
      status: 'success',
      data: {
        posts,
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

exports.createPost = async (req, res) => {
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

    const { title, body, slug } = req.body
    const user = req.user._id
    const post = await Post.create({ user, title, slug, body })

    res.status(201).json({
      status: 'success',
      data: { post },
    })
  } catch (error) {
    console.warn('Error: ', error)

    res.status(400).json({
      status: 'fail',
      message: 'Failed creating post !',
    })
  }
}

exports.getOnePost = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug }).populate('user')

    if (!post || post.length < 1) {
      return res.status(400).json({
        status: 'fail',
        message: 'Post not found !',
      })
    }

    res.status(200).json({
      status: 'success',
      data: {
        post,
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

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug })

    if (!post || post.length < 1) {
      return res.status(400).json({
        status: 'fail',
        message: 'Post not found !',
      })
    }

    post.title = req.body.title
    post.body = req.body.body
    await post.save({ validateBeforeSave: false })

    res.status(200).json({
      status: 'success',
      data: {
        post,
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

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug })

    if (!post || post.length < 1) {
      return res.status(400).json({
        status: 'fail',
        message: 'Post not found !',
      })
    }

    await post.remove()

    res.status(204).json({
      status: 'success',
    })
  } catch (error) {
    console.warn('Error: ', error)

    res.status(400).json({
      status: 'fail',
      message: 'Failed creating post !',
    })
  }
}
