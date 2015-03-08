module.exports = function(app) {

  // assign routers to each route group
  app.use('/', require('./routers/main'));

};
