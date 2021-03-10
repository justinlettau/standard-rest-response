import { HttpError } from '../http-error';
import { HttpErrorItem } from '../http-error-item';
import { HttpStatusCode } from '../http-status-code';

/**
 * HTTp version not supported (505).
 */
export class HttpVersionNotSupported extends HttpError {
  constructor(
    message = 'HTTP Version Not Supported',
    errors?: HttpErrorItem[]
  ) {
    super(HttpStatusCode.HTTP_VERSION_NOT_SUPPORTED, message, errors);
  }
}
