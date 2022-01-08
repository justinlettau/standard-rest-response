import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * Unauthorized (401).
 */
export class Unauthorized extends HttpError {
  constructor(message = 'Unauthorized', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.UNAUTHORIZED, message, errors);
  }
}
