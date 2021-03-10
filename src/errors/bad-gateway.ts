import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * Bad gateway (502).
 */
export class BadGateway extends HttpError {
  constructor(message = 'Bad Gateway', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.BAD_GATEWAY, message, errors);
  }
}
