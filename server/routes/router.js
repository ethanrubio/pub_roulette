'use strict'

const path = require('path');
const app = require('../server.js');
const morgan = require('morgan');
const bodyParser = require('body-parser');

module.exports = (app, express) => {
  const uberRouter = express.Router();
  const yelpRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static('./public'));

  app.use('/api/uber', uberRouter);
  app.use('/api/yelp', yelpRouter);

  require('./uberRouter.js')(uberRouter);
  require('./yelpRouter.js')(yelpRouter);
};
