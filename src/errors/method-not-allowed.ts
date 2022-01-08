import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * Method not allowed (405).
 */
export class MethodNotAllowed extends HttpError {
  constructor(message = 'Method Not ALlowed', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.METHOD_NOT_ALLOWED, message, errors);
  }
}
