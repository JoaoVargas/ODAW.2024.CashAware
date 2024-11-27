import express from 'express';
import config from 'config';
import cors from "cors";

import usuarioRouter from '../api/routes/usuario_route.js';
import authRouter from '../api/routes/auth_route.js'

export default () => {
  const app = express();

  app.use(cors({
    origin: "http://localhost:5003", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));
  
  app.set('port', config.get('server.port'));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/api', usuarioRouter);
  app.use('/api', authRouter);

  return app;
};
