import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * Forbidden (403).
 */
export class Forbidden extends HttpError {
  constructor(message = 'Forbidden', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.FORBIDDEN, message, errors);
  }
}
