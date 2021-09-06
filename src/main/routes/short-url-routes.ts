import { Router } from 'express';
import { adaptRoute } from '../adapters';
import { adaptRouteRedirect } from '../adapters/express-routes-redirect-adapter';
import { makeAddShortUrlController } from '../factories/controller/add-short-url-controller';
import { makeRedirectShortUrlController } from '../factories/controller/redirect-short-url-controller';

export default (router: Router): void => {
  router.post('/shorturl', adaptRoute(makeAddShortUrlController()));
  router.get(
    '/shorturl/:url',
    adaptRouteRedirect(makeRedirectShortUrlController())
  );
};
