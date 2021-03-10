import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * Unauthorized (401).
 */
export class Unauthorized extends HttpError {
  constructor(message = 'Unauthorized', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.UNAUTHORIZED, message, errors);
  }
}
