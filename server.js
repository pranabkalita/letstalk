// Global Imports
const express = require('express')
const dotenv = require('dotenv')

dotenv.config({ path: './.env' })

// Project project imports
const database = require('./config/database')
const viewRouter = require('./routes/View')
const postRouter = require('./routes/Post')
const authRouter = require('./routes/Auth')

database.connect()

const app = express()

app.use(express.json({ limit: '10kb' }))

app.use('/', viewRouter)
app.use('/api/posts', postRouter)
app.use('/api/auth', authRouter)

const PORT = process.env.SERVER_PORT
app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`)
})
