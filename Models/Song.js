"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Song = /** @class */ (function () {
    function Song(i, t, s, c, l) {
        this.index = i;
        this.title = t;
        this.subtitle = s;
        this.coverURL = c;
        this.link = l;
        this.favorite = false;
    }
    return Song;
}());
exports.Song = Song;
