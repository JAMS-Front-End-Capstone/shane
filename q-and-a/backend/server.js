const path = require('path');

// modules
const database = require(path.join(__dirname, 'modules', 'database.js'));
const controller = require(path.join(__dirname, 'modules', 'controllers.js'));

// express
const express = require('express');
const app = express();
const port = 3004;

// cors
const cors = require('cors');
app.use(cors());

// morgan
app.use(morgan('common', {
  skip: function (req, res) { return req.ip === '::ffff:127.0.0.1'; }, // prohibits logging of docker healthcheck requests
  immediate: true
}));
app.use(morgan('tiny'));

// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// this endpoint is for docker healthcheck and diagnostic purposes
app.get('/', (req, res, next) => {
  res.status(200);
  res.send('Hello, I am the API for: q-and-a.');
});

// static hosting
app.use('/avatars', express.static(path.join(__dirname, 'avatars')));

// routers
app.get('/API/q-and-a/retrieve', controller.handleAPIrequest);
app.get('/API/q-and-a/retrieve/:id', controller.handleAPIrequest);
app.get('/API/q-and-a/seedDatabase', controller.handleDatabaseSeeding);

// listeners
app.listen(port, () => {
  console.log(`Backend: Listening at http://localhost:${port}`);
});
