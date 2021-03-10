import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * Conflict (409).
 */
export class Conflict extends HttpError {
  constructor(message = 'Conflict', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.CONFLICT, message, errors);
  }
}
