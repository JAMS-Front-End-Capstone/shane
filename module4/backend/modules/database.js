const path = require('path');
const mongoose = require('mongoose');
const faker = require('faker');

const endpoint = 'mongodb://localhost/fec-module4';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.connect(endpoint, options);

const logConnectionResult = (error) => {
  if (error) {
    console.log('DB Connection Error!', error);
  } else {
    console.log('Backend: DB Connection Successful!');
  }
};

mongoose.connection.on('error', (err) => {
  logConnectionResult(err);
});

mongoose.connection.once('open', logConnectionResult);

const schema = {
  name: String,
  cost: Number,
  tagline: String,
  reviewQty: Number,
  reviewRating: Number,
  costDetail: String,
  companyURL: String,
  propertyType: String,
  image: String
};
const Model = mongoose.model('m4-property', schema);

const createSeedRecord = () => {
  return new Promise((resolve, reject) => {
    const data = {
      name: faker.company.companyName(),
      cost: Math.floor(Math.random() * 500 + 60),
      tagline: faker.lorem.words(),
      reviewQty: Math.floor(Math.random() * 2000 + 1),
      reviewRating: Math.floor(Math.random() * 5 + 1),
      costDetail: 'adult',
      companyURL: 'http://www.google.com/',
      propertyType: faker.lorem.word(),
      image: 'http://localhost:3000/public/m4-sample' + Math.floor(Math.random() * 9 + 1) + '.jpg',
    };
    const output = new Model(data);
    resolve(output);
  });
};

module.exports.seedDatabase = (databaseModel, qtyOfRecords = 4) => {
  return new Promise ((resolve, reject) => {
    databaseModel.collection.drop();
    let anErrorOccured = false;
    for (let i = 0; i < qtyOfRecords; i++) {
      if (anErrorOccured) { break; }
      createSeedRecord()
        .then((record) => {
          databaseModel.create(record);
        })
        .catch((error) => {
          anErrorOccured = true;
        });
    }
    if (anErrorOccured) {
      reject('Error seeding database. Check connection!');
    } else {
      let output = 'SUCCESS: Wiped and Inserted ' + qtyOfRecords + ' records in database.';
      resolve(output);
    }
  });

};

module.exports.Model = Model;
