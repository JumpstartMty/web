module.exports = {
  dev: {
    script: 'bin/start',
    options: {
      env: {
        DEBUG: 'http,app,database,info,app:*',
        NODE_ENV: 'development'
      },
      ignore: ['public/'],
      ext: 'js,hbs,jsx'
    }
  }
};
