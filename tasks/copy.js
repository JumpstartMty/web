module.exports = {
  assets: {
    files: [
      { expand: true, cwd: 'assets/src/', src: ['img/**'], dest: 'assets/dist/' },
      { expand: true, cwd: 'assets/src/', src: ['fonts/**'], dest: 'assets/dist/' }
    ]
  }
};