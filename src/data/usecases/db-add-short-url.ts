import { AddShortUrl } from '../../domain/usecases';
import { AddShortUrlRepository, GenerateKey } from '../protocols';

export class DbAddShortUrlRepository implements AddShortUrl {
  constructor(
    private readonly addShortUrlRepository: AddShortUrlRepository,
    private readonly generateKey: GenerateKey
  ) {}

  async add(params: AddShortUrl.Params): Promise<AddShortUrl.Response> {
    const key = await this.generateKey.generate();
    const url = await this.addShortUrlRepository.add({ url: params.url, key });
    return url;
  }
}
