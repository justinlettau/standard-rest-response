import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * Not implemented (501).
 */
export class NotImplemented extends HttpError {
  constructor(message = 'Not Implemented', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.NOT_IMPLEMENTED, message, errors);
  }
}
