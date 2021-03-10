import { HttpError } from './http-error';
import { HttpErrorItem } from './http-error-item';
import { HttpStatusCode } from './http-status-code';

describe('HttpError', () => {
  let status: HttpStatusCode;
  let message: string;
  let errors: HttpErrorItem[];

  beforeEach(() => {
    status = HttpStatusCode.I_AM_A_TEAPOT;
    message = 'No coffee for you';
    errors = [
      {
        code: 'JEDI_MIND_TRICK',
        field: '',
        message: "Jedi mind tricks don't work on me",
      },
    ];
  });

  it('should set properties', () => {
    const error = new HttpError(status, message, errors);

    expect(error.status).toBe(status);
    expect(error.message).toBe(message);
    expect(error.errors).toBe(errors);
  });

  it('should return JSON', () => {
    const error = new HttpError(status, message, errors);
    const result = error.toJSON();

    expect(result).toEqual({
      message,
      errors,
    });
  });
});
