const { MongoClient } = require('mongodb');
require("dotenv").config();

const url = process.env.MONGO_KEY;
const client = new MongoClient(url);

async function connectToMongo(){
    try{
        await client.connect();
        console.log("Connected to database")
    }catch(e){
        console.error("Error connecting to mongo", e);
        throw e;
    }
}

async function closeMongo(){
    try{
        await client.close();
        console.log("Closed database");
    }catch(e){
        console.error("Error closing connection", e);
        throw e;
    }
}

async function insertData(collectionName, data) {
    const db = await connectToMongo();
    const collection = db.collection(collectionName);
    try {
        const result = await collection.insertOne(data);
        console.log(`Successfully inserted item with _id: ${result.insertedId}`);
    } catch (e) {
        console.error("Error inserting data", e);
        throw e;
    } 
}


module.exports = { connectToMongo, closeMongo, insertData };