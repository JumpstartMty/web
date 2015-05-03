module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass:         require('./tasks/sass'),
    watch:        require('./tasks/watch'),
    clean:        require('./tasks/clean'),
    copy:         require('./tasks/copy'),
    eslint:       require('./tasks/eslint'),
    nodemon:      require('./tasks/nodemon'),
    browserify:   require('./tasks/browserify')

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('gruntify-eslint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', []);

  grunt.registerTask('test', ['eslint']);
  grunt.registerTask('build', [
    'clean:dist',
    'sass',
    'browserify:production',
    'copy:assets',
    'clean:cache'
  ]);
  grunt.registerTask('server', ['nodemon']);

};