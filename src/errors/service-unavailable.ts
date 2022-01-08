import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * Service unavailable (503).
 */
export class ServiceUnavailable extends HttpError {
  constructor(message = 'Service Unavailable', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.SERVICE_UNAVAILABLE, message, errors);
  }
}
