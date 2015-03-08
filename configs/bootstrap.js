var express     = require('express'),
    morgan      = require('morgan'),
    session     = require('express-session'),
    flash       = require('flash'),
    handlebars  = require('./handlebars'),
    middleware  = require('./middleware'),
    config      = require('./config'),
    mongoose    = require('./mongoose');

module.exports = function(app) {



  // variable that will tell if the application can receive requests or not,
  // this will be disabled by adapters such as mysql when an error occurs in
  // order to prevent further problems
  app.enable('incoming-connections');



  // check if the 'incoming-connections' app setting is enabled, when it is
  // disabled it will render the suspended.hbs template, when it is enabled, it
  // will just pass the request to the next middleware
  app.use(function(req, res, next) {
    if (!app.disabled('incoming-connections')) return next();
    res.render('errors/suspended');
  });



  // configure the middleware defined in 'middleware.js'
  middleware.configure(app);

  // session initialization
  app.use(session({
    secret: config.session_secret,
    resave: false,
    saveUninitialized: false
  }));

  // request flash messages
  app.use(flash());

  // run the mongoose configuration from 'mongoose.js'
  mongoose(app);



  // what to do when the application is running in development mode
  if (process.env.NODE_ENV !== 'production') {
    app.set('env', 'development');
    app.use(morgan('  \x1b[32mhttp\x1b[0m :method :url \x1b[32m:status\x1b[0m :response-time ms - :res[content-length]', 'dev'));
  } else {
    app.set('env', 'production');
  }



  // configure the handlebars engine and helper classes
  handlebars.configure(app);



  // set the static folder of the application
  app.use('/assets', express.static(__dirname + '/../assets/dist'));



  // set the application port
  app.set('port', process.env.PORT || 3000);

};
