const path = require('path');
const mongoose = require('mongoose');
const faker = require('faker');
const errorHandler = require(path.join(__dirname, 'errorHandler.js'));

const url = 'mongodb://localhost/qanda';
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
  contributions: { type: Number, default: 0 },
  helpfulVotes: { type: Number, default: 0 },
  location: String
};

const authorModel = mongoose.model('author', author);

const post = {
  author: Array,
  date: String,
  language: String,
  body: String,
  helpfulScore: {type: Number, default: 0 },
  replies: Array,
};

const postModel = mongoose.model('post', post);

const createSeedRecord = () => {

  return new Promise((resolve, reject) => {

    const generateContributor = () => {
      let image = `avatars/${Math.floor(Math.random() * (8 - 1 + 1) )}.jpg`;
      return {
        name: faker.internet.userName(),
        imageUrl: image,
        contributions: Math.floor(Math.random() * 300 + 1),
        location: faker.address.city() + ', ' + faker.address.state(),
        helpfulVotes: Math.floor(Math.random() * 100 + 1)
      };
    };

    const generatePost = (replyDate = '2019-04-23') => {
      let output = {
        author: generateContributor(),
        date: faker.date.between(replyDate, '2021-02-01'),
        language: 'English',
        body: faker.lorem.paragraph(),
        helpfulScore: Math.floor(Math.random() * 50 + 1)
      };
      return output;
    };

    const output = new postModel(generatePost());
    let includeResponses = (Math.random() < 0.75);
    let responsesArray = [];

    if (includeResponses) {
      let qtyOfResponses = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
      for (let i = 0; i < qtyOfResponses; i++) {
        const replyToPush = new postModel(generatePost(output.date));
        output.replies.push(replyToPush);
      }
    }
    resolve(output);
  });
};

module.exports.seedDatabase = (qtyOfRecords = 30) => {
  return new Promise ((resolve, reject) => {
    postModel.collection.drop()
      .catch((error) => {
        console.log('database.seedDatabase: database already dropped');
      });
    let anErrorOccured = false;
    for (let i = 0; i < qtyOfRecords; i++) {
      if (anErrorOccured) { break; }
      createSeedRecord()
        .then((record) => {
          postModel.create(record);
        })
        .catch((error) => {
          console.log('Seeding error:', error);
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

module.exports.postModel = postModel;
module.exports.authorModel = authorModel;

