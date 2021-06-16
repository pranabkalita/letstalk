const express = require('express')
const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost:27017/latstalk', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DATABASE CONNECTED ! Hurray !')
  })
  .catch((err) => {
    console.log('ERROR CONNECTING DATABASE : ')
  })

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World ! Its a wonderful day !')
})

app.get('/about', (req, res) => {
  res.send('Hello About !')
})

app.get('/contact', (req, res) => {
  res.send('Hello Contact !')
})

app.listen(3000, () => {
  console.log(`Server running on PORT : 3000`)
})
