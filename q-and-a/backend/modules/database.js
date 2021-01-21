const path = require('path');
const mongoose = require('mongoose');
const faker = require('faker');
const errorHandler = require(path.join(__dirname, 'errorHandler.js'));

const url = 'mongodb://localhost/fec-q-and-a';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.connect(url, options);

const logConnectionResult = (error) => {
  if (error) {
    console.log('DB Connection Error!', error);
  } else {
    console.log('Backend: DB Connection Successful!');
  }
};

mongoose.connection.on('error', (err) => {
  errorHandler.log(err);
});

mongoose.connection.once('open', logConnectionResult);

const author = {
  name: String,
  imageUrl: String,
  contributions: Number,
  location: String
};

const post = {
  author: [authorModel],
  date: String,
  language: String,
  body: String,
  replies: [postModel]
};

const authorModel = mongoose.model('author', author);
const postModel = mongoose.model('post', post);

const createSeedRecord = () => {
  return new Promise((resolve, reject) => {

    const contributor = {
      name: faker.internet.userName(),
      imageUrl: faker.internet.avatar(),
      contributions: Math.floor(Math.random() * 300 + 1),
      location: faker.address.city() + ', ' + faker.address.state()
    };

    const question = {
      author: contributor,
      date: faker.date.recent(),
      language: 'English',
      body: faker.lorem.paragraph(),
      replies: []
    };

    const output = new Model(question);
    resolve(output);
  });
};

module.exports.seedDatabase = (databaseModel, qtyOfRecords = 30) => {
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

module.exports.seedDatabase(postModel);

module.exports.postModel = postModel;
module.exports.authorModel = authorModel;

