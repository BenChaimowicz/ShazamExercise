import * as path from 'path';

import * as express from 'express';
import * as bodyParser from 'body-parser';

import { router } from './Controllers/Favorites';

const app = express();

const port = process.env.PORT || 80;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname , '/dist/ShazamApp')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api', router);

// /* {Get}
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/shazamapp/index.html'));
});

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(port);
