const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017'

const client = new MongoClient(url)

//async func to connect to our DB

async function ConnectDB(){
    await client.connect();
    return client.db('bookshop').collection('books')
    
}

module.exports = ConnectDB();