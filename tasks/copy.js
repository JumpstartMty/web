module.exports = {
  assets: {
    files: [
      { expand: true, cwd: 'core/client/', src: ['img/**'], dest: 'public/' },
      { expand: true, cwd: 'core/client/', src: ['fonts/**'], dest: 'public/' },
      { expand: true, cwd: 'core/client/', src: ['templates/**'], dest: 'public/' }
    ]
  }
};
