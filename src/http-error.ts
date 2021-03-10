import { HttpErrorItem } from './http-error-item';
import { HttpStatusCode } from './http-status-code';

/**
 * HTTP error.
 */
export class HttpError {
  constructor(
    status: HttpStatusCode,
    message: string,
    errors?: HttpErrorItem[]
  ) {
    this.status = status;
    this.message = message;
    this.errors = errors;
  }

  /**
   * HTTP status code.
   */
  status: HttpStatusCode;

  /**
   * Response message.
   */
  message: string;

  /**
   * Optional error items.
   */
  errors: HttpErrorItem[] | undefined;

  /**
   * TO JSON.
   */
  toJSON() {
    return {
      message: this.message,
      errors: this.errors,
    };
  }
}
