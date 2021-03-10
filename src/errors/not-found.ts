import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * Not found (404).
 */
export class NotFound extends HttpError {
  constructor(message = 'Not Found', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.NOT_FOUND, message, errors);
  }
}
