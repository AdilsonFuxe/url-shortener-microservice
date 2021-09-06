export class InvalidUrlError extends Error {
  constructor() {
    super('invalid URL');
    this.name = 'InvalidUrlError';
  }
}
