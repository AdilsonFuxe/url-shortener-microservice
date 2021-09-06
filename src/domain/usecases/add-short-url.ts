import { ShortUrl } from '../models';

export interface AddShortUrl {
  add: (params: AddShortUrl.Params) => Promise<AddShortUrl.Response>;
}

export namespace AddShortUrl {
  export type Params = { url: string };
  export type Response = ShortUrl;
}
