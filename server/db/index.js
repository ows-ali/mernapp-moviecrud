const mongoose = require('mongoose')

mongoose
    .connect(
        // 'mongodb://127.0.0.1:27017/cinema'
        'mongodb+srv://ows:ows@cluster0.zo9r2.mongodb.net/cinema?retryWrites=true&w=majority'


        , { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db

