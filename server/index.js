const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const movieRouter = require('./routes/movie-router')

const app = express()
const apiPort = 3003

app.use(bodyParser.urlencoded({ extended: true }))



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var corsOptions = {
    origin: "*"
  };
app.use(cors(corsOptions))


app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send(res.json({resp:'Hello World!',header:req.headers}))
})

app.use('/api', movieRouter)
const host = '0.0.0.0'

app.listen(process.env.PORT || apiPort, host, () => console.log(`Server running on port ${apiPort}`))