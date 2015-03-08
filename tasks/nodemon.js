module.exports = {
  dev: {
    script: 'bin/app',
    options: {
      env: {
        DEBUG: 'http,app,database,info',
        NODE_ENV: 'development'
      },
      ext: 'js,hbs'
    }
  }
};