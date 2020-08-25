const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_SRV
const dbName = process.env.DB_NAME


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })


let collections = {}


async function connect() {
    await client.connect()
    const database = client.db(dbName)
    const allCollections = await database.listCollections().toArray()

    allCollections.forEach(col => {
        collections[col.name] = database.collection(col.name)
    })
}


module.exports = {
    init: connect,
    collections: collections,
}