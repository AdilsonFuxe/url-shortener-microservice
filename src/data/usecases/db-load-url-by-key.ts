import { LoadUrlByKey } from '../../domain/usecases';
import { LoadUrlByKeyRepository } from '../protocols';

export class DbLoadUrlByKey implements LoadUrlByKey {
  constructor(
    private readonly loadUrlByKeyRepository: LoadUrlByKeyRepository
  ) {}

  async loadByKey(key: string): Promise<LoadUrlByKey.Response> {
    const url = await this.loadUrlByKeyRepository.loadByKey(key);
    return url;
  }
}
