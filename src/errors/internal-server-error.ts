import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * Internal server error (500).
 */
export class InternalServerError extends HttpError {
  constructor(message = 'Internal Server Error', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.INTERNAL_SERVER_ERROR, message, errors);
  }
}
