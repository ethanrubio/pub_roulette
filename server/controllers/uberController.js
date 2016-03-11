'use strict'

const Uber = require('node-uber');

if (!process.env.USERNAME) {
  var keys = require('../config/config.js');
};

const uber = new Uber({
  client_id: keys.uber.client_id || process.env.UBER_CLIENT_ID,
  client_secret: keys.uber.client_secret || process.env.UBER_CLIENT_SECRET,
  server_token: keys.uber.server_token || process.env.UBER_SERVER_TOKEN,
  redirect_uri: 'REDIRECT URL',
  name: 'BAR_ROULETTE'
});

module.exports = {
  estimate: (req, res, next) => {
    let startLat = req.body.startLat;
    let startLong = req.body.startLong;
    let endLat = req.body.endLat;
    let endLong = req.body.endLong;

   uber.estimates.price({
     start_latitude: startLat,
     start_longitude: startLong,
     end_latitude: endLat,
     end_longitude: endLong }, (error, response) => {
       if (error) {
         console.error(error);
       } else {
         console.log(response);
         res.status(200).send(response);
       }
   });

    console.log(`i'm in the uber controller - startLat: ${startLat}`);
    console.log(`i'm in the uber controller - startLong: ${startLong}`);
  }

};
