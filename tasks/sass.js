module.exports = {
  dist: {
    options: {
      sourcemap: 'none',
      style: 'compressed'
    },
    files: {
      'public/<%= pkg.name%>.css': 'core/client/scss/index.scss'
    }
  }
};
