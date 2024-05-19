import {MongoClient} from 'mongodb';

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

export{connectToMongo, closeMongo}