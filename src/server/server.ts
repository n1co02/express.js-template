import cors from 'cors';
import express from 'express';
import type {Server} from 'http';
import {OK} from '../constants';
//import {json} from 'body-parser';
import startExpressApp from '../utility/startExpressApp';
import router from '../router/testRouter';

export async function startServer(
  port: number,
  // add params
): Promise<Server> {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use('/test', router);
  app.get('/ping', (req, res) => {
    res.send({status: OK});
  });

  return startExpressApp(app, port);
}
