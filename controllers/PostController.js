const Post = require('./../models/Post')

exports.allPosts = (req, res) => {
  res.send('All Posts From Controller !')
}

exports.createPost = async (req, res) => {
  try {
    const { title, body, slug } = req.body
    const post = await Post.create({ title, slug, body })

    res.status(201).json({
      status: 'success',
      post,
    })
  } catch (error) {
    console.warn('Error: ', error)

    res.status(400).json({
      status: 'fail',
      message: 'Failed creating post !',
    })
  }
}

exports.getOnePost = (req, res) => {
  res.send('Get one Post !')
}

exports.updatePost = (req, res) => {
  res.send('Update one Post !')
}

exports.deletePost = (req, res) => {
  res.send('Delete one Post !')
}
