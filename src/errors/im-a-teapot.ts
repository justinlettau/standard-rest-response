import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * I'm a teapot (418).
 */
export class ImATeaPotSupported extends HttpError {
  constructor(message = "I'm a Teapot", errors?: HttpErrorItem[]) {
    super(HttpStatusCode.I_AM_A_TEAPOT, message, errors);
  }
}
