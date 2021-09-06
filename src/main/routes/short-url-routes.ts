import { Router } from 'express';
import { adaptRoute } from '../adapters';
import { makeAddShortUrlController } from '../factories/controller/add-short-url-controller';

export default (router: Router): void => {
  router.post('/shorturl', adaptRoute(makeAddShortUrlController()));
};
