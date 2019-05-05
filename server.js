"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var express = require("express");
var bodyParser = __importStar(require("body-parser"));
var Favorites_1 = require("./Controllers/Favorites");
var app = express();
var port = process.env.PORT || 80;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/dist/ShazamApp')));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use('/api', Favorites_1.router);
// /* {Get}
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/shazamapp/index.html'));
});
app.use(function (req, res) {
    res.sendStatus(404);
});
app.listen(port);
