/**
 * ### Catch-all error handler for express
 *
 * Easily handle error by passing error message or object to the express `next()` function
 *
 * @param err error message or object
 *
 * @param req express request object
 *
 * @param res express response object
 *
 * @param next express next function
 *
 * Sign: Suraj
 *
 * ts: true
 */
import { NextFunction, Request, Response } from 'express';
import { MysqlError } from 'mysql';

export default (err: MysqlError | string, _req: Request, res: Response, next: NextFunction) => {
  // Declare regex to extract error code if any
  const errCode = err.toString().match(/^[0-9]{3}/g);

  // Add all your logging here
  console.log('error.ts => ', err);
  console.log('error.ts => ', err.toString());
  console.log('error.ts => ', errCode);

  // Set Status code and send error response
  try {
    if (errCode && typeof err === 'string')
      res.status(Number(errCode[0])).json({
        success: 0,
        message: err.replace(errCode[0], '').trim(),
      });
    else
      res.status(500).json({
        success: 0,
        message: err,
      });
  } catch {
    res.status(500).json({
      success: 0,
      message: err,
    });
  }
  next(err);
};
