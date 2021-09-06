import { ShortUrl } from '../../../domain/models';

export interface LoadUrlByKeyRepository {
  loadByKey: (key: string) => Promise<LoadUrlByKeyRepository.Response>;
}

export namespace LoadUrlByKeyRepository {
  export type Params = { url: string; key: string };
  export type Response = ShortUrl;
}
