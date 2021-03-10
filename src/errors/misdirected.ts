import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * Misdirect (421).
 */
export class Misdirected extends HttpError {
  constructor(message = 'Misdirected', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.MISDIRECTED, message, errors);
  }
}
