import * as express from 'express';

import { Song } from '../Models/Song';

export const router = express.Router();

const favorites: Song[] = [];

// /api/getAllFavorites {Get}
router.get('/getAllFavorites', (req, res) => {
  res.status(200).send(favorites);
});

// /api/addToFavorites {Post}
router.post('/addToFavorites', (req, res) => {
  checkFavorites(req.body);
  console.log(favorites);
  console.log(favorites.length);
  res.status(201);
  res.end();
});

function checkFavorites(song: Song) {
  let found = false;

  if (favorites.length > 0) {
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].index === song.index) {
        found = true;
        favorites.splice(i);
        break;
      }
    }
  }
  if (!found) {
    favorites.push(new Song(song.index, song.title, song.subtitle, song.coverURL, song.link));
  }

  markFavorite();
}

function markFavorite() {
  favorites.forEach(song => {
    song.favorite = true;
  });
}
