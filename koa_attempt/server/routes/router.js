'use strict'

const path = require('path');
/*const helpers = require('../util/helpers.js');*/
const morgan = require('koa-morgan');
const jsonBody = require('koa-json-body');
const cors = require('koa-cors');
const serveStatic = require('koa-serve-static');
const router = require('koa-simple-router');
const uberController = require('../controllers/uberController');


module.exports = (app, koa) => {
  /*var userRouter = express.Router();
  var profileRouter = express.Router();
  var contactRouter = express.Router();*/
  /*app.use(cors());*/
  app.use(morgan('combined'));
  app.use(jsonBody());

  app.use(router(_ => {
    _.get('/uber/api', (ctx, next) => {
      console.log(uberController.test);
      ctx.body = 'hello';
      uberController.test;
    })
    _.post('/name/:id', (ctx, next) => {
      // ...
    })
  }))

  app.use(serveStatic('./public'));
  /*app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());*/

  /*app.use((ctx, next) => {
    return next().then(() => {
      console.log('hi');
      send(this, this.path, { root: __dirname + './public' });
    });
  });*/

  /*app.use((ctx) => {
    send(this, this.path, { root: __dirname + './public' });
    });*/

  /*app.use(function *(){
    yield send(this, this.path, { root: __dirname + './public' });
  })*/

  /*app.use('/api/yelp', yelpRouter);
  app.use('/api/uber', uberRouter);*/

  /*app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);*/

  /*app.use(router({ prefix: '/api' }, _ => {
    _.get('/uber', (ctx, next) => {
      ctx.body = 'hi';
      ctx.status = 200;
    })
    _.post('/:user/id', (ctx, next) => {

    })
  }))*/


  // inject our routers into their respective route files
  /*require('./yelpRouter.js')(yelpRouter);*/
  /*require('./uberRouter.js')(app);*/
};
