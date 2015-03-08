module.exports = function(app) {

  // assign routers to each route group
  app.use('/', require('./routers/main'));
  app.use('/auth', require('./routers/auth'));

};
