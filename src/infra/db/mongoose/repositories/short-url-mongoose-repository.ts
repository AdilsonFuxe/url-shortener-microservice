import {
  AddShortUrlRepository,
  LoadUrlByKeyRepository,
} from '../../../../data/protocols';
import { MongoHelper } from '../helper';
import { ShortUrlMongooseModel } from '../models';

export class ShortUrlMongooseRepository
  implements AddShortUrlRepository, LoadUrlByKeyRepository
{
  async add({
    key,
    url,
  }: AddShortUrlRepository.Params): Promise<AddShortUrlRepository.Response> {
    const doc = new ShortUrlMongooseModel({ shortUrl: key, originalUrl: url });
    await doc.save();
    const parsedDoc = JSON.parse(JSON.stringify(doc));
    return MongoHelper.serialize(parsedDoc);
  }

  async loadByKey(key: string): Promise<LoadUrlByKeyRepository.Response> {
    const url = await ShortUrlMongooseModel.findOne({ shortUrl: key }).lean();
    return MongoHelper.serialize(url);
  }
}
