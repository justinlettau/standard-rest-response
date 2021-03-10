import { HttpError } from '../http-error';
import { HttpStatusCode } from '../http-status-code';
import { catchHttpErrors } from './catch-http-errors';

describe('catchHttpErrors', () => {
  const req = {};
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };
  const next = jest.fn();

  it('should call next for non-http errors', () => {
    const error = new Error('Move along');
    catchHttpErrors(error, req, res, next);

    expect(next).toBeCalled();
  });

  it('should set status and return error json', () => {
    const status = HttpStatusCode.I_AM_A_TEAPOT;
    const message = 'No coffee for you';
    const error = new HttpError(status, message);
    catchHttpErrors(error, req, res, next);

    expect(res.status).toBeCalled();
    expect(res.json).toBeCalled();
  });
});
