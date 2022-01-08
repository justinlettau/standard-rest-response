import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * Conflict (409).
 */
export class Conflict extends HttpError {
  constructor(message = 'Conflict', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.CONFLICT, message, errors);
  }
}
