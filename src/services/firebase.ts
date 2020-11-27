import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert(require('./../config/serviceAccountKey.json')),
  databaseURL: '',
});

export const db = admin.firestore();

export default admin;
