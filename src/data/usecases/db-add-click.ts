import { AddClick } from '../../domain/usecases';
import { AddClickRepository } from '../protocols';

export class DbAddClick implements AddClick {
  constructor(private readonly addClickRepository: AddClickRepository) {}

  async addClick(key: string): Promise<void> {
    await this.addClickRepository.addClick(key);
  }
}
