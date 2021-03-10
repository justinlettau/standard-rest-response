import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * Gateway timeout (504).
 */
export class GatewayTime extends HttpError {
  constructor(message = 'Gateway Timeout', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.GATEWAY_TIMEOUT, message, errors);
  }
}
