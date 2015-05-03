import routers from './routers';

module.exports = (app) => {

  app.use('/', routers.main);

};
