const path = require('path');
const database = require(__dirname, 'database.js');

const returnAllRecords = (error, callback) => {
  database.schema.findAll({}, (reject, resolve) => {
    if (error) {
      callback(reject, null);
    } else {
      callback(null, resolve);
    }
  });
};

module.exports.returnAllRecords = returnAllRecords;
