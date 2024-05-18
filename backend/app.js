const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json({ limit: '2mb' })); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const port = 3000;
// app.use(express.static(path.join(__dirname, 'frontend', 'dist')));
app.listen(port, () => console.log(`Backend Running ${port}`));

