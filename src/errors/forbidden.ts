import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * Forbidden (403).
 */
export class Forbidden extends HttpError {
  constructor(message = 'Forbidden', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.FORBIDDEN, message, errors);
  }
}
