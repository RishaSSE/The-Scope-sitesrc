const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/')));
app.use((req, res, next) => {res.status(404).send("404")});
app.listen(80, () => console.log('Server up'));