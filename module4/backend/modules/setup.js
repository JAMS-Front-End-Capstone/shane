const path = require('path');
const db = require(path.join(__dirname, 'database.js'));

const wipeAllRecords = () => {
  return new Promise((resolve, reject) => {
    db.model.deleteMany({}, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

const seedDatabase = () => {
  return new Promise((resolve, reject) => {
    db.model.find({}, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};
