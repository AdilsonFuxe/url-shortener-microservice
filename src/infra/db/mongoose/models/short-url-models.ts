import { model, Schema } from 'mongoose';
import {
  Schemas,
  ShortUrlDocument,
  ShortUrlMongooseModel,
} from './models-protocols';

const ShortUrlSchema = new Schema<ShortUrlDocument>(
  {
    originalUrl: {
      type: String,
      required: true,
      trim: true,
    },
    shortUrl: {
      type: String,
      required: true,
      trim: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default model<ShortUrlDocument, ShortUrlMongooseModel>(
  Schemas.ShortUrl,
  ShortUrlSchema
);
