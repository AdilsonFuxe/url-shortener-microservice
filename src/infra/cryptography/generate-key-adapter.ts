import { GenerateKey } from '../../data/protocols';
import { v4 as uuidv4 } from 'uuid';

export class GenerateKeyAdapter implements GenerateKey {
  async generate(): Promise<string> {
    return Promise.resolve(uuidv4());
  }
}
