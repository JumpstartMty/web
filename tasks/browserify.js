var babelify = require('babelify');

module.exports = {

  dev: {
    files: {
      'public/<%= pkg.name %>.js': ['core/client/js/**/*.js']
    },
    options: {
      browserifyOptions: {
        debug: true
      },
      transform: [babelify]
    }
  },

  production: {
    files: {
      'public/<%= pkg.name %>.js': ['core/client/js/**/*.js']
    },
    options: {
      browserifyOptions: {
        debug: false
      },
      transform: [babelify]
    }
  }

};
