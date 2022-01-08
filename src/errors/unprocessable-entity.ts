import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * Unprocessable entity (422).
 */
export class UnprocessableEntity extends HttpError {
  constructor(message = 'Unprocessable Entity', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.UNPROCESSABLE_ENTITY, message, errors);
  }
}
