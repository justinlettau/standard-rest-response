import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * Internal server error (500).
 */
export class InternalServerError extends HttpError {
  constructor(message = 'Internal Server Error', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.INTERNAL_SERVER_ERROR, message, errors);
  }
}
