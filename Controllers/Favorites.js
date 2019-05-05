"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var Song_1 = require("../Models/Song");
exports.router = express.Router();
var favorites = [];
// /api/getAllFavorites {Get}
exports.router.get('/getAllFavorites', function (req, res) {
    res.status(200).send(favorites);
});
// /api/addToFavorites {Post}
exports.router.post('/addToFavorites', function (req, res) {
    checkFavorites(req.body);
    console.log(favorites);
    console.log(favorites.length);
    res.status(201);
    res.end();
});
function checkFavorites(song) {
    var found = false;
    if (favorites.length > 0) {
        for (var i = 0; i < favorites.length; i++) {
            if (favorites[i].index === song.index) {
                found = true;
                favorites.splice(i);
                break;
            }
        }
    }
    if (!found) {
        favorites.push(new Song_1.Song(song.index, song.title, song.subtitle, song.coverURL, song.link));
    }
    markFavorite();
}
function markFavorite() {
    favorites.forEach(function (song) {
        song.favorite = true;
    });
}
