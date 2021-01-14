const path = require('path');
const mongoose = require('mongoose');
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

const dataStructure = {
  name: String,
  cost: Number,
  tagline: String,
  reviewQty: Number,
  reviewRating: Number,
  costDetail: String,
  companyURL: String,
  propertyType: String,
  image: {
    path: String,
    filename: String,
    extension: String
  }
};
const databaseSchema = mongoose.model('m4-property', dataStructure);

module.exports.schema = databaseSchema;
