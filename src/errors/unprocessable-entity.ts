import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * Unprocessable entity (422).
 */
export class UnprocessableEntity extends HttpError {
  constructor(message = 'Unprocessable Entity', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.UNPROCESSABLE_ENTITY, message, errors);
  }
}
