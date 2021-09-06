import { AddShortUrl } from '../../domain/usecases';
import { InvalidUrlError, MissingParamError } from '../errors';
import { badRequest, created, serverError } from '../helpers/http/http-helper';
import {
  Controller,
  HttpRequest,
  HttpResponse,
  UrlValidator,
} from '../protocols';

export class AddShortUrlController implements Controller {
  constructor(
    private readonly addShortUrl: AddShortUrl,
    private readonly urlValidator: UrlValidator
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.body['url']) {
        return badRequest(new MissingParamError('url'));
      }
      const { url } = httpRequest.body;
      const isValid = this.urlValidator.validate(url);
      if (!isValid) {
        return badRequest(new InvalidUrlError());
      }
      const { originalUrl, shortUrl } = await this.addShortUrl.add({ url });
      return created({ original_url: originalUrl, short_url: shortUrl });
    } catch (error) {
      return serverError(error as any);
    }
  }
}
