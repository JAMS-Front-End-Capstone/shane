const path = require('path');
const db = require(path.join(__dirname, 'database.js'));

const returnAllRecords = () => {
  return new Promise((resolve, reject) => {
    db.Model.find({}, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};


module.exports.returnAllRecords = returnAllRecords;
