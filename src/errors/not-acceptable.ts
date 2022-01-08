import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * Not acceptable (406).
 */
export class NotAcceptable extends HttpError {
  constructor(message = 'Not Acceptable', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.NOT_ACCEPTABLE, message, errors);
  }
}
