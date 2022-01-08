import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * Gone (410).
 */
export class Gone extends HttpError {
  constructor(message = 'Gone', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.GONE, message, errors);
  }
}
