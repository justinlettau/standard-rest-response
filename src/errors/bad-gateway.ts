import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * Bad gateway (502).
 */
export class BadGateway extends HttpError {
  constructor(message = 'Bad Gateway', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.BAD_GATEWAY, message, errors);
  }
}
