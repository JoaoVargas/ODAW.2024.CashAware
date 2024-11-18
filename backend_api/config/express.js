import express from 'express';
import config from 'config';
import usuarioRouter from '../api/routes/usuario_route.js';

export default () => {
  const app = express();
  
  app.set('port', config.get('server.port'));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/api', usuarioRouter);

  return app;
};
