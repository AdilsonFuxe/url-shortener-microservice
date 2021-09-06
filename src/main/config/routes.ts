import { Express, Router } from 'express';
import shortUrlRouter from '../routes/short-url-routes';

export default (app: Express): void => {
  const router = Router();
  shortUrlRouter(router);
  app.use('/api', router);
};
