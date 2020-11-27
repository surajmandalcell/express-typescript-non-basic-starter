import { NextFunction, Request, Response } from 'express';

import admin from './../../services/firebase';
import { noAuth } from './../../utility/responses';

// Referance
// https://firebase.google.com/docs/auth/admin/verify-id-tokens
export function checkAuth(req: Request, _res: Response, next: NextFunction) {
  let token = req.get('authorization');
  // handle firebase token check
  if (!token) {
    next(noAuth);
  } else {
    try {
      return admin
        .auth()
        .verifyIdToken(token)
        .then(function (decodedToken) {
          let sid = decodedToken.uid;
          console.log('success =>', sid);
          next();
        })
        .catch(next);
    } catch (e) {
      return next(e);
    }
  }
}
