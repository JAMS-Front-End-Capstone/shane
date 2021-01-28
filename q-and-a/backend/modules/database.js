const path = require('path');
const mongoose = require('mongoose');
const faker = require('faker');
const errorHandler = require(path.join(__dirname, 'errorHandler.js'));

let databaseURL = 'mongodb://localhost/qanda';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

if (process.env.NODE_ENV === 'production') {
  databaseURL = process.env.databaseURI;
  options.user = process.env.databaseUser;
  options.pass = process.env.databasePass;
}

const author = {
  name: String,
  imageUrl: String,
  contributions: { type: Number, default: 0 },
  helpfulVotes: { type: Number, default: 0 },
  location: String
};

const authorModel = mongoose.model('author', author);

const post = {
  itemID: Number,
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
        itemID: 1,
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

const seedDatabase = (qtyOfRecords = 30) => {
  return new Promise ((resolve, reject) => {
    postModel.collection.drop((error) => {
    });
    let anErrorOccured = false;
    for (let i = 0; i < qtyOfRecords; i++) {
      if (anErrorOccured) { break; }
      createSeedRecord()
        .then((record) => {
          postModel.create(record);
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
    postModel.find({}, (error, data) => {
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

module.exports.postModel = postModel;
module.exports.authorModel = authorModel;
module.exports.seedDatabase = seedDatabase;
