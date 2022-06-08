const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const movieRouter = require('./routes/movie-router')

const app = express()
const apiPort = 3003

app.use(bodyParser.urlencoded({ extended: true }))


app.use()
  
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send(res.json({resp:'Hello World!',header:req.headers}))
})

app.use('/api', movieRouter)
const host = '0.0.0.0'

app.listen(process.env.PORT || apiPort, host, () => console.log(`Server running on port ${apiPort}`))