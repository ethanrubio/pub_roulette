'use strict'

const uberController = require('../controllers/uberController.js');

module.exports = (app) => {
  app.post('/journey', uberController.estimate);
};
