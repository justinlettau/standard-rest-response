import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * Service unavailable (503).
 */
export class ServiceUnavailable extends HttpError {
  constructor(message = 'Service Unavailable', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.SERVICE_UNAVAILABLE, message, errors);
  }
}
