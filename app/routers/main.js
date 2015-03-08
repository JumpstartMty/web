var express = require('express'),
    router  = express.Router();

// controllers
var homeController = require('../controllers/homeController');


router.get('/', function(req, res, next) {
  homeController.main(req, res, next); // pass the request to the controller action
});


module.exports = router;