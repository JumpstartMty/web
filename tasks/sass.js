module.exports = {
  dist: {
    options: {
      sourcemap: 'none',
      style: 'compressed'
    },
    files: {
      'assets/dist/<%= pkg.name%>.css': 'assets/src/sass/main.scss'
    }
  }
};