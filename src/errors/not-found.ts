import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * Not found (404).
 */
export class NotFound extends HttpError {
  constructor(message = 'Not Found', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.NOT_FOUND, message, errors);
  }
}
