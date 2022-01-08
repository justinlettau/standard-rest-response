/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpError } from '../http-error.js';

/**
 * Catch http errors and send response.
 */
export function catchHttpErrors(
  err: unknown,
  req: any,
  res: any,
  next: (err?: any) => void
) {
  if (err instanceof HttpError) {
    res.status(err.status).json(err);
  } else {
    next(err);
  }
}
