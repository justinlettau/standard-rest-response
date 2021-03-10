import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * Method not allowed (405).
 */
export class MethodNotAllowed extends HttpError {
  constructor(message = 'Method Not ALlowed', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.METHOD_NOT_ALLOWED, message, errors);
  }
}
