'use strict'

const yelpController = require('../controllers/yelpController.js');

module.exports = (app) => {
  app.post('/location', yelpController.search);
};
