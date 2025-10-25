import { NextFunction, Response, Request } from 'express';
import { HttpError } from 'http-errors';

export const notFoundErr = (req: Request, res: Response, err: NextFunction) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
    return;
  }

  res.status(404).json({
    message: 'Route not found',
  });
};
