import { Response, Request } from 'express';
import { Controller, HttpRequest } from '../../interface/protocols';

export const adaptRouteRedirect = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
    };
    const httpResponse = await controller.handle(httpRequest);
    if (httpResponse.statusCode === 200) {
      res.status(httpResponse.statusCode).redirect(httpResponse.body.url);
    } else {
      res
        .status(httpResponse.statusCode)
        .json({ error: httpResponse.body.message });
    }
  };
};
