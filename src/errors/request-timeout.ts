import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * Request timeout (408).
 */
export class RequestTimeout extends HttpError {
  constructor(message = 'Request Timeout', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.REQUEST_TIMEOUT, message, errors);
  }
}
