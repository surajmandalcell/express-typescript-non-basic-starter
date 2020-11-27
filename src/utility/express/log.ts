import fs from 'fs';
import logger from 'morgan';
import { MysqlError } from 'mysql';
import path from 'path';

/**
 * ### Log helper
 * Helps with boilerplate code related to logging
 *
 * Sign: Suraj
 *
 * ts: true
 */
export const log = {
  /**
   * Send log to this function to reduce repeted boilerplate code
   *
   * @param err error message or object
   * @param result result of the request
   */
  l: (err: MysqlError | number | string, result?: any) => {
    if (typeof err !== 'string' && typeof err !== 'number' && err)
      console.log('Mysql Error Code => ', err.code);
    if (err) console.log('Error => ', err.toString());
    console.log('Result => ', JSON.stringify(result, undefined, 2));
  },

  /**
   * #### Morgan Logger function, use this inside `app.use()`
   */
  morgan: logger('combined', {
    stream: fs.createWriteStream(path.join(__dirname, '..', '..', 'logs', 'morgan.txt'), {
      flags: 'a',
    }),
  }),
};
