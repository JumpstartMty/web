var express   = require('express'),
    passport  = require('passport');
    router    = express.Router();


router.get('/github', passport.authenticate('github'));

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});


module.exports = router;