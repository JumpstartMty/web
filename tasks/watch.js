module.exports = {
  files: ['core/client/**/*.js', 'core/client/**/*.scss'],
  tasks: ['eslint:client', 'clean:dist', 'browserify:dev', 'copy:assets', 'clean:cache']
};
