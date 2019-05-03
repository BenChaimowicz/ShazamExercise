const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const Song = require('./dist/Models/Song');
const FavoritesController = require('./dist/Controllers/Favorites');

const app = express();

const port = process.env.PORT || 80;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname ,'/dist/ShazamApp')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', FavoritesController);

// /* {Get}
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/shazamapp/index.html'));
});

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(port);
