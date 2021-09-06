import { UrlValidator } from '../interface/protocols';
import validator from 'validator';

export class UrlValidatorAdapter implements UrlValidator {
  validate(url: string): boolean {
    return validator.isURL(url);
  }
}
