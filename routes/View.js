const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World ! Its a wonderful day !')
})

router.get('/about', (req, res) => {
  res.send('Hello About !')
})

router.get('/contact', (req, res) => {
  res.send('Hello Contact !')
})

module.exports = router
