import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * Unsupported media type (415).
 */
export class UnsupportedMediaType extends HttpError {
  constructor(message = 'Unsupported Media Type', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.UNSUPPORTED_MEDIA_TYPE, message, errors);
  }
}
