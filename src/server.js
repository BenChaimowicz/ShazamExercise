const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const Song = require('./Models/Song').default;

const app = express();

const port = process.env.PORT || 80;
const favorites = [];

app.use(bodyParser.urlencoded({ extended: true }));

// /api/getAllFavorites {Get}
app.get('/api/getAllFavorites', (req, res) => {
  res.status(200).json(favorites);
})

// /api/addToFavorites {Post}
app.post('/api/addToFavorites', (req, res) => {
  if (typeof (req.body.index) === 'number' && req.body.index > 0 && req.body.index % 1 == 0) {
    const sindex = req.body.index;
  }
  if (req.body.title && req.body.title != null && req.body.title != '') {
    const stitle = req.body.title;
  }
  if (req.body.subtitle && req.body.subtitle != null && req.body.subtitle != '') {
    const ssubtitle = req.body.subtitle;
  }
  if (index && title && subtitle) {
    const scoverURL = req.body.coverURL;
    const slink = req.body.link;

    favorites.push(new Song(sindex, stitle, ssubtitle, scoverURL, slink));
  } else { res.status(400) };
})

app.use((req, res) => {
  res.status(404);
})
app.listen(port);
