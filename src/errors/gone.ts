import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * Gone (410).
 */
export class Gone extends HttpError {
  constructor(message = 'Gone', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.GONE, message, errors);
  }
}
