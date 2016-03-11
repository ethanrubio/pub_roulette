'use strict'

const Koa = require('koa');
const app = new Koa();

/*app.use(ctx => {
  ctx.body = 'Hello Koa';
});*/

require('./routes/router.js')(app, Koa);

module.exports = app;
