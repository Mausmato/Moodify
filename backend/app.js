const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler');

const app = express();

app.use(express.json({ limit: '2mb' })); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', routesHandler)

const port = 3000;
// app.use(express.static(path.join(__dirname, 'frontend', 'dist')));
app.listen(port, () => console.log(`Backend Running ${port}`));

