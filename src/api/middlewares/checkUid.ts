import { NextFunction, Request, Response } from 'express';

import { log } from '../../utility/express/log';
import admin from './../../services/firebase';

// Referance
// https://firebase.google.com/docs/auth/admin/verify-id-tokens
export function checkUid(req: Request, _res: Response, next: NextFunction) {
  let token = req.get('authorization');
  var id = '';
  if (req.params.uid) id = req.params.uid;
  if (req.query.uid) id = req.query.uid.toString();
  if (req.body.uid) id = req.body.uid;
  // firebase token check
  if (!token) next('Denied');
  else
    admin
      .auth()
      .verifyIdToken(token)
      .then(function (decodedToken) {
        log.l(`Decoded Token => ${decodedToken.uid}`);
        const sid = decodedToken.uid;
        const uid = sid;
        if (sid === id) next();
        else if (uid === id) next();
        else next('Wrong user');
      })
      .catch(next);
}
