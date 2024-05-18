const express = require('express');

const app = express();
const port = 3000;

app.use(express.json({ limit: '2mb' })); 
// app.use(express.static(path.join(__dirname, 'frontend', 'dist')));
app.listen(port, () => console.log(`Backend Running ${port}`));

