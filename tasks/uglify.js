module.exports = {
  production: {
    options: {
      mangle: true,
      sourceMap: false,
      preserveComments: false,
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    files: {
      'assets/dist/<%= pkg.name %>.js': ['assets/src/javascript/**/*.js']
    }
  },
  development: {
    options: {
      mangle: true,
      sourceMap: true,
      preserveComments: false,
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */'
    },
    files: {
      'assets/dist/<%= pkg.name %>.js': ['assets/src/javascript/**/*.js']
    }
  }
};