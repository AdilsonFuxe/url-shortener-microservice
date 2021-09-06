export class InvalidUrlError extends Error {
  constructor() {
    super('invalid url');
    this.name = 'InvalidUrlError';
  }
}
