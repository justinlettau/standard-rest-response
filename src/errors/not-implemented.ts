import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * Not implemented (501).
 */
export class NotImplemented extends HttpError {
  constructor(message = 'Not Implemented', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.NOT_IMPLEMENTED, message, errors);
  }
}
