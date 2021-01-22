
// express
const express = require('express');
const app = express();
const port = 8080;

// cors
const cors = require('cors');
app.use(cors());

// morgan
const morgan = require('morgan');
app.use(morgan('tiny'));

// static hosting for frontend
app.use('/', express.static('dist'));

app.listen(port, () => {
  console.log(`Frontend listening at http://localhost:${port}`);
});
