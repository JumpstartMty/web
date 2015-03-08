module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: require('./tasks/sass'),
    watch: require('./tasks/watch'),
    concat: require('./tasks/concat'),
    cssmin: require('./tasks/cssmin'),
    clean: require('./tasks/clean'),
    uglify: require('./tasks/uglify'),
    copy: require('./tasks/copy'),
    jshint: require('./tasks/jshint'),
    nodemon: require('./tasks/nodemon')

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-devtools');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', []);

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('build', [
    'test',
    'clean:dist',
    'sass',
    'uglify:production',
    'copy:assets',
    'clean:cache'
  ]);
  grunt.registerTask('build:dev', [
    'test',
    'clean:dist',
    'sass',
    'uglify:development',
    'copy:assets',
    'clean:cache'
  ]);

  grunt.registerTask('debug', ['nodemon']);

};
