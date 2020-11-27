import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert(require('./../config/serviceAccountKey.json')),
  databaseURL: 'https://madebymaa-f1a67.firebaseio.com',
});

export const db = admin.firestore();

export default admin;
