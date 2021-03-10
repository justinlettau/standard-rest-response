import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * Precondition failed (412).
 */
export class PreconditionFailed extends HttpError {
  constructor(message = 'Precondition Failed', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.PRECONDITION_FAILED, message, errors);
  }
}
