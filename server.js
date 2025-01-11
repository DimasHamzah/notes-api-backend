const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = new Hapi.Server({
    host: 'localhost',
    port: 5001,
    routes: {
      cors: {
        origin: ['*']
      }
    }
  });

  server.route(routes);

  await server.start();
  console.log('server started');
};

init();