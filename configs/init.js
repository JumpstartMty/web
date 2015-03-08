var http          = require('http'),
    debug         = require('debug')('app'),
    bootstrap     = require('./bootstrap'),
    errorhandler  = require('./errorhandler'),
    routes        = require('../app/routes');

module.exports = function(app) {

  // create http server
  var server = http.createServer(app);

  // bootstrap configuration
  bootstrap(app);

  // routing groups
  routes(app);

  // error handler
  errorhandler(app);

  // start http server
  server.listen(app.get('port'), function() {
    console.log('> Application running on port %s', app.get('port'));
  });

};
