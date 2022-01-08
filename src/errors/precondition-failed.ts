import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * Precondition failed (412).
 */
export class PreconditionFailed extends HttpError {
  constructor(message = 'Precondition Failed', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.PRECONDITION_FAILED, message, errors);
  }
}
