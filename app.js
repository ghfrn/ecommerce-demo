// THIS is the server's heart.

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

//var mongoTools = require('./js/data/mongo.js');

// Basic Routing
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './html/index.html'));
});

app.get('/product', (req, res) => {
  res.sendFile(path.resolve(__dirname, './html/product.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port);