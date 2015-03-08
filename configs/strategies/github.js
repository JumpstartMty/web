var GitHubStrategy = require('passport-github').Strategy,
    User           = require('../../app/models/user');

module.exports = function(passport) {

  passport.use(new GitHubStrategy({

    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: '/auth/github/callback'

  },

  function(accessToken, refreshToken, profile, done) {

    User.findOne({'github_id': profile.id}, function(err, user) {
      if (err) return done(err);

      if (user) return done(null, user);

      // there is no user found, create them
      var newUser = new User();

      newUser.username = profile.username;
      newUser.name = profile.displayName;
      newUser.email = profile.emails[0].value;

      newUser.github_avatar = profile._json.avatar_url;
      newUser.github_id = profile._json.id;
      newUser.github_hireable = profile._json.hireable;
      newUser.github_location = profile._json.location;

      newUser.save(function(err) {
        if (err) return(err, null);
        return done(null, newUser);
      });

    });

  }

  ));

  return passport;

};
