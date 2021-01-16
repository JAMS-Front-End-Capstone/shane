const path = require('path');
const errorHandler = require(path.join(__dirname, 'errorHandler.js'));
const model = require(path.join(__dirname, 'models.js'));
const view = require(path.join(__dirname, 'views.js'));
const db = require(path.join(__dirname, 'database.js'));


module.exports.handleAPIrequest = (req, res, next) => {
  model.returnAllRecords()
    .then( (result) => {
      view.sendReplyToRequestor(req, res, next, result);
    })
    .catch( e => errorHandler.log( e ) );
};
module.exports.handleDatabaseSeeding = (req, res, next) => {
  db.seedDatabase(db.Model)
    .then( (result) => {
      view.sendReplyToRequestor(req, res, next, result);
    })
    .catch( e => errorHandler.log( e ) );
};
