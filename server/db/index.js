const mongoose = require('mongoose')
const {ServerApiVersion} = require('mongodb')
mongoose
    .connect(
        // 'mongodb://127.0.0.1:27017/cinema'

        'mongodb://ows:ows@cluster0-shard-00-00.zo9r2.mongodb.net:27017,cluster0-shard-00-01.zo9r2.mongodb.net:27017,cluster0-shard-00-02.zo9r2.mongodb.net:27017/cinema?replicaSet=atlas-aca8vp-shard-0&ssl=true&authSource=admin'
        //this one stopped working . some dns issue, but abve works on same cluster/database/collection
        // 'mongodb+srv://owais:owais@cluster0.zo9r2.mongodb.net/cinema?retryWrites=true&w=majority'

        // clever cloud string
        // 'mongodb+srv://ucgi3ha1voffbisxvyx6:2gYrjH59PoSO9R5jUrP0@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bpjzvfvqpsuxovv?retryWrites=true&w=majority'
        // 'mongodb://ucgi3ha1voffbisxvyx6:2gYrjH59PoSO9R5jUrP0@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bpjzvfvqpsuxovv?replicaSet=rs0'

        // unused mongo db connection string, created using another email (institute one), may need to change format as above working conenction string
        // 'mongodb+srv://owsali:<password>@cluster0.pccugis.mongodb.net/?retryWrites=true&w=majority'
        , 
        { 
            // useNewUrlParser: true ,
        
            useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1}
        
        )
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db

