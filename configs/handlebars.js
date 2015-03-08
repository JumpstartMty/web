var hbs       = require('hbs'),
    fs        = require('fs'),
    numeral   = require('numeral');

exports.configure = function(app) {


  /***********************************
   * Handlebars Helpers              *
   ***********************************/

  hbs.registerHelper('toLowerCase', function(string) {
    return string.toLowerCase();
  });

  hbs.registerHelper('inc', function(value) {
    return parseInt(value) + 1;
  });

  hbs.registerHelper('numFormat', function(number) {
    return numeral(number).format('0,0');
  });

  var version = JSON.parse(fs.readFileSync(__dirname + '/../package.json')).version;
  hbs.registerHelper('version', function() {
    return version;
  });



  // handlebars partials
  hbs.registerPartials(__dirname + '/../app/views/partials');

  // handlebars engine setup and template directory setting
  app.set('views', __dirname + '/../app/views');
  app.set('view engine', 'hbs');

};
