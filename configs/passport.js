var passport = require('passport'),
    User     = require('../app/models/user');

// session serialization, we don't have to do anything
passport.serializeUser(function(user, done) {
  return done(null, user);
});

// session deserialization, get the user from the database
passport.deserializeUser(function(user, done) {
  User.find({'_id': user._id}, function(err, user) {
    return done(err, user);
  });
});


// setup the passport strategies
if (process.env.GITHUB_CLIENT_ID) {
  passport = require('./strategies/github')(passport);
}

// export the configured passport object
module.exports = passport;