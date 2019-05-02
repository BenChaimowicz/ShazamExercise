const express = require('express');

const Song = require('../Models/Song');

const router = express.Router();

const favorites = [];

// /api/getAllFavorites {Get}
router.get('/getAllFavorites', (req, res) => {
  res.sendStatus(200).send(favorites);
})

// /api/addToFavorites {Post}
router.post('/addToFavorites', (req, res) => {
  // if (typeof (req.body.index) === 'number' && req.body.index > 0 && req.body.index % 1 == 0) {
  //   const sindex = req.body.index;
  // }
  // if (req.body.title && req.body.title != null && req.body.title != '') {
  //   const stitle = req.body.title;
  // }
  // if (req.body.subtitle && req.body.subtitle != null && req.body.subtitle != '') {
  //   const ssubtitle = req.body.subtitle;
  // }
  // if (index && title && subtitle) {
  //   const scoverURL = req.body.coverURL;
  //   const slink = req.body.link;

  //   let song = new Song(sindex, stitle, ssubtitle, scoverURL, slink);
  //   favorites.push(song);
  //   console.log(song);
  // } else { res.sendStatus(400) };
  console.log(JSON.stringify(req.body));
  res.sendStatus(201);
});

module.exports = router;
