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
const morgan = require('morgan');
app.use(morgan('tiny'));

// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// static hosting
app.use('/avatars', express.static(path.join(__dirname, 'avatars')));

// routers
app.get('/API/retrieve', controller.handleAPIrequest);
app.get('/API/retrieve/:id', controller.handleAPIrequest);
app.get('/API/seedDatabase', controller.handleDatabaseSeeding);

// listeners
app.listen(port, () => {
  console.log(`Backend: Listening at http://localhost:${port}`);
});
