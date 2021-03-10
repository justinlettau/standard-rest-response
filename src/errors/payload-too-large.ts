import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * Payload too large (413).
 */
export class PayloadTooLarge extends HttpError {
  constructor(message = 'Payload Too Large', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.PAYLOAD_TOO_LARGE, message, errors);
  }
}
