import { NextFunction, Request, Response } from 'express';
import { MysqlError } from 'mysql';

import pool from '../../services/mysql';
import { log } from '../../utility/express/log';
import { createSuccess, noDbConn } from '../../utility/responses';
import { strh } from '../../utility/string_helper';

export function dummyPost(req: Request, res: Response, next: NextFunction) {
  const body = strh.eo(req.body);
  fun(body, (err: MysqlError, result?: any) => {
    log.l(err, result);
    if (err) return next(noDbConn);
    return res.status(200).json(createSuccess);
  });
}

const fun = (data: any, callBack: any) => {
  const { uid, name, email, phone } = data;
  pool.query(
    `INSERT INTO Users (uid, Name, Email, Phone)
    VALUES ('${uid}', '${name}', '${email}','${phone}')`,
    (error: MysqlError | null, result: any) => {
      if (error) return callBack(error);
      return callBack(null, result);
    }
  );
};
