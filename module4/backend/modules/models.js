const path = require('path');
const db = require(path.join(__dirname, 'database.js'));

module.exports.returnAllRecords = () => {
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
