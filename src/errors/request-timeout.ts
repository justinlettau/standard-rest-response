import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * Request timeout (408).
 */
export class RequestTimeout extends HttpError {
  constructor(message = 'Request Timeout', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.REQUEST_TIMEOUT, message, errors);
  }
}
