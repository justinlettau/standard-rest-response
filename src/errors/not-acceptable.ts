import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * Not acceptable (406).
 */
export class NotAcceptable extends HttpError {
  constructor(message = 'Not Acceptable', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.NOT_ACCEPTABLE, message, errors);
  }
}
