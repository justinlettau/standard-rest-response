import { HttpError } from '../http-error.js';
import { HttpErrorItem } from '../http-error-item.js';
import { HttpStatusCode } from '../http-status-code.js';

/**
 * Unsupported media type (415).
 */
export class UnsupportedMediaType extends HttpError {
  constructor(message = 'Unsupported Media Type', errors?: HttpErrorItem[]) {
    super(HttpStatusCode.UNSUPPORTED_MEDIA_TYPE, message, errors);
  }
}
