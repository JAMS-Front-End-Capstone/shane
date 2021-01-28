const path = require('path');
const mongoose = require('mongoose');
const faker = require('faker');
const errorHandler = require(path.join(__dirname, 'errorHandler.js'));

let databaseURL = 'mongodb://localhost/related';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

if (process.env.NODE_ENV === 'production') {
  databaseURL = process.env.databaseURI;
  options.user = process.env.databaseUser;
  options.pass = process.env.databasePass;
}

const schema = {
  itemID: Number,
  name: String,
  cost: String,
  tagline: String,
  reviewQty: Number,
  reviewRating: Number,
  costDetail: String,
  companyURL: String,
  propertyType: String,
  image: String
};
const Model = mongoose.model('property', schema);

const createSeedRecord = () => {
  return new Promise((resolve, reject) => {
    const propertyTypeArray = ['Beaches', 'Jet Boating', 'Snorkeling', 'Boat Rentals', 'Tubing', 'Sightseeing Tours', 'Boat Tours', 'Excursions', 'Day Cruises', 'Shark Diving'];
    const data = {
      itemID: 1,
      name: faker.company.companyName(),
      cost: (Math.floor(Math.random() * 500 + 60) + (Math.floor(Math.random() * 99 + 1)) / 100).toFixed(2),
      tagline: faker.lorem.words(),
      reviewQty: Math.floor(Math.random() * 2300 + 1),
      reviewRating: (Math.ceil((Math.random() * 45 + 1) / 5) * 5),
      costDetail: 'adult',
      companyURL: 'http://www.google.com/',
      propertyType: propertyTypeArray[Math.floor((Math.random() * propertyTypeArray.length))],
      image: 'images/m4-sample' + Math.floor(Math.random() * 9 + 1) + '.jpg',
    };
    const output = new Model(data);
    resolve(output);
  });
};

const seedDatabase = (databaseModel = Model, qtyOfRecords = 5) => {
  return new Promise ((resolve, reject) => {
    databaseModel.collection.drop((error) => {
    });
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
      let output = 'Backend: Seeded ' + qtyOfRecords + ' records in database.';
      resolve(output);
    }
  });
};

const logConnectionResult = (error) => {
  if (error) {
    console.log('DB Connection Error!', error);
  } else {
    Model.find({}, (error, data) => {
      if (error) {
        console.log('Backend: DB Connection Successful! But got error querying database:', error);
      } else {
        console.log('Backend: DB Connection Successful! Found', data.length, 'records in db.');
        if (data.length === 0) {
          console.log('Backend: DB has 0 records, flagging for automatic seeding.');
          seedDatabase();
        }
      }
    });
  }
};

mongoose.connection.on('error', (err) => {
  errorHandler.log(err);
});

mongoose.connection.once('open', logConnectionResult);
mongoose.connect(databaseURL, options)
  .catch((error) => {
    console.log('error connecting to database:', error);
  });

module.exports.seedDatabase = seedDatabase;
module.exports.Model = Model;
