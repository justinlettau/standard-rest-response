import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * Payload too large (413).
 */
export class PayloadTooLarge extends HttpError {
  constructor(message = 'Payload Too Large', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.PAYLOAD_TOO_LARGE, message, errors);
  }
}
