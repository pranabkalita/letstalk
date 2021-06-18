// Global Imports
const express = require('express')

// Project project imports
const database = require('./config/database')
const viewRouter = require('./routes/View')
const postRouter = require('./routes/Post')

database.connect()

const app = express()

app.use(express.json({ limit: '10kb' }))

app.use('/', viewRouter)
app.use('/posts', postRouter)

app.listen(3000, () => {
  console.log(`Server running on PORT : 3000`)
})
