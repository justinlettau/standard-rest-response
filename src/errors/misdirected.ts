import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * Misdirect (421).
 */
export class Misdirected extends HttpError {
  constructor(message = 'Misdirected', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.MISDIRECTED, message, errors);
  }
}
