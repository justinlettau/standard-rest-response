import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * Bad request (400).
 */
export class BadRequest extends HttpError {
  constructor(message = 'Bad Request', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.BAD_REQUEST, message, errors);
  }
}
