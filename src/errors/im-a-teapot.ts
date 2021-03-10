import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * I'm a teapot (418).
 */
export class ImATeaPotSupported extends HttpError {
  constructor(message = "I'm a Teapot", errors?: HttpErrorItem[]) {
    super(HttpStatusCode.I_AM_A_TEAPOT, message, errors);
  }
}
