const { connectToMongo, closeMongo } = require('./mongo');

const express = require('express');
const cors = require('cors');
// const path = require('path');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler');

const app = express();

app.use(cors());
app.use(express.json({ limit: '2mb' })); 
// app.use(express.static(path.join(__dirname, '../frontend/src')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', routesHandler);

const port = 4001;
// app.use(express.static(path.join(__dirname, 'frontend', 'dist')));
app.listen(port, () => console.log(`Backend Running ${port}`));

connectToMongo().catch((error) => { 
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); 
});

process.on('SIGINT', async()=>{
    console.log("SHUTTING DOWN MONGO ...");
    await closeMongo();
    process.exit(0);
})


