exports.main = function(req, res, next) {

  res.render('pages/home', {
    layout: 'layouts/main'
  });

};