import { NextFunction, Request, Response } from 'express';
import { FieldInfo, MysqlError } from 'mysql';

import pool from './../../services/mysql';
import { log } from './../../utility/express/log';
import { noDbConn, noExist } from './../../utility/responses';

export function dummy(_req: Request, res: Response, next: NextFunction) {
  // Check environment, if not dev dont execute
  console.log('process.env =>', process.env.NODE_ENV);
  if (process.env.NODE_ENV !== 'dev') return next(noExist);
  // Do Stuff
  getStudent((err: MysqlError, result: any) => {
    log.l(err, result);
    if (err) return next(noDbConn);
    return res.status(200).json(result);
  });
}

const getStudent = (callBack: any) => {
  pool.query(
    `select * from Users`,
    (error: MysqlError | null, result: any, _fields: FieldInfo[]) => {
      if (error) return callBack(error);
      return callBack(null, result);
    }
  );
};
