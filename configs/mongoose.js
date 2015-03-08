var mongoose   = require('mongoose'),
    debug      = require('debug')('database');


module.exports = function(app) {

  var dbURI = process.env.MONGOOSE_URI || 'mongodb://localhost/jumpstartmx';

  mongoose.connect(dbURI);

  mongoose.connection.on('connected', function() {
    debug('Connected to MongoDB database!');
    app.enable('incoming-connections');
  });

  mongoose.connection.on('error', function(err) {
    debug('Mongodb Error:\n' + err);
  });

  mongoose.connection.on('disconnected', function() {
    debug('Disconnected from MongoDB database!');
    app.disable('incoming-connections');
  });

  process.on('SIGINT', function() {
    mongoose.connection.close(function () {
      debug('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  });

};
