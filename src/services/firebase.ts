import * as admin from 'firebase-admin';
import * as serviceAccountKey from './../config/serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  databaseURL: '',
});

export const db = admin.firestore();

export default admin;
