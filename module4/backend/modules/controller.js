const path = require('path');

module.exports.hello = () => {
  return 'hello';
};

module.exports.handleAPIrequest = (req, res, next) => {
  console.log('ok');
  res.status(200);
  res.send('handled');
  next();
};
