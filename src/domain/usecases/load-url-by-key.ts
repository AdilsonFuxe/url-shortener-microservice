import { ShortUrl } from '../models';

export interface LoadUrlByKey {
  loadByKey: (key: string) => Promise<LoadUrlByKey.Response>;
}

export namespace LoadUrlByKey {
  export type Response = ShortUrl;
}
