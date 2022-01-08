import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * Gateway timeout (504).
 */
export class GatewayTime extends HttpError {
  constructor(message = 'Gateway Timeout', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.GATEWAY_TIMEOUT, message, errors);
  }
}
