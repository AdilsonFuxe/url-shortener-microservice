import { DbAddShortUrl } from '../../../data/usecases/db-add-short-url';
import { GenerateKeyAdapter } from '../../../infra/cryptography/generate-key-adapter';
import { ShortUrlMongooseRepository } from '../../../infra/db/mongoose/repositories/short-url-mongoose-repository';
import { AddShortUrlController } from '../../../interface/controllers';
import { Controller } from '../../../interface/protocols';
import { UrlValidatorAdapter } from '../../../validator';

const makeAddShortUrlController = (): Controller => {
  const shortUrlMongooseRepository = new ShortUrlMongooseRepository();
  const generateKeyAdapter = new GenerateKeyAdapter();
  const dbAddShortUrl = new DbAddShortUrl(
    shortUrlMongooseRepository,
    generateKeyAdapter
  );
  const urlValidator = new UrlValidatorAdapter();
  const controller = new AddShortUrlController(dbAddShortUrl, urlValidator);
  return controller;
};
