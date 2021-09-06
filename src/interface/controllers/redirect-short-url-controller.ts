import { LoadUrlByKey } from '../../domain/usecases';
import { InvalidUrlError } from '../errors';
import { badRequest, ok, serverError } from '../helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class RedirectShortUrlController implements Controller {
  constructor(private readonly loadUrlByKey: LoadUrlByKey) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { url } = httpRequest.params;
      const result = await this.loadUrlByKey.loadByKey(url);
      if (!result) {
        return badRequest(new InvalidUrlError());
      }
      return ok({ url: result.originalUrl });
    } catch (error) {
      return serverError(error as any);
    }
  }
}
