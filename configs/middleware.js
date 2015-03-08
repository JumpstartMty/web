var cookieParser = require('cookie-parser'),
    debug        = require('debug')('http'),
    bodyParser   = require('body-parser');

exports.configure = function(app) {

  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

};
