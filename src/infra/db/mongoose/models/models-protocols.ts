import { Document, Model } from 'mongoose';
import { ShortUrl } from '../../../../domain/models';

export type ShortUrlDocument = ShortUrl &
  Document & {
    id: Document['_id'];
  };

export type ShortUrlMongooseModel = Model<ShortUrlDocument> & {
  id: Document['_id'];
};

export enum Schemas {
  ShortUrl = 'ShortUrl',
}
