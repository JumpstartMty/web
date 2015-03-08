module.exports = function(app) {


  // 404 handler
  app.use(function(req, res) {

    // send http 404 code
    res.status(404);

    // render the '404' tempalte
    res.render('errors/404', {
      layout: false
    });
  });


  // 500 handler
  app.use(function(err, req, res, next) {

    // send http 500 code
    res.status(500);

    // get a timestamp
    var today = new Date();
    var timestamp = today.toString();
    var showError = false;

    // decide wether to display error or not
    if (app.get('env') === 'production') {
      showError = false;
    } else {
      showError = true;
    }

    // render the '500' template with the time and error information
    res.render('errors/500', {
      error: err,
      date: timestamp,
      showError: showError
    });

  });

};
