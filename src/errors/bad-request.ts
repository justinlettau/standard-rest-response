import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * Bad request (400).
 */
export class BadRequest extends HttpError {
  constructor(message = 'Bad Request', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.BAD_REQUEST, message, errors);
  }
}
