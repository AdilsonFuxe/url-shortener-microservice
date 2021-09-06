import { DbAddClick } from '../../../data/usecases/db-add-click';
import { DbLoadUrlByKey } from '../../../data/usecases/db-load-url-by-key';
import { ShortUrlMongooseRepository } from '../../../infra/db/mongoose/repositories/short-url-mongoose-repository';
import { RedirectShortUrlController } from '../../../interface/controllers';
import { Controller } from '../../../interface/protocols';

export const makeRedirectShortUrlController = (): Controller => {
  const shortUrlMongooseRepository = new ShortUrlMongooseRepository();
  const dbLoadUrlByKey = new DbLoadUrlByKey(shortUrlMongooseRepository);
  const dbAddClick = new DbAddClick(shortUrlMongooseRepository);
  const controller = new RedirectShortUrlController(dbLoadUrlByKey, dbAddClick);
  return controller;
};
