import { AddShortUrl } from '../../../domain/usecases';

export interface AddShortUrlRepository {
  add: (
    params: AddShortUrlRepository.Params
  ) => Promise<AddShortUrlRepository.Response>;
}

export namespace AddShortUrlRepository {
  export type Params = { url: string; key: string };
  export type Response = AddShortUrl.Response;
}
