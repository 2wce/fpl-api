import { firestoreImport } from 'node-firestore-import-export';
import * as admin from 'firebase-admin';

const serviceAccount = require('./service.json');
const data = require('./matches.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://kuda-site.firebaseio.com',
});

// const data = {
//   docA: {
//     name: 'bob',
//     __collections__: {}
//   },
//   docB: {
//     name: 'jill',
//     __collections__: {}
//   }
// };

const collectionRef = admin.firestore().collection('matches');

firestoreImport(data, collectionRef)
    .then(()=>console.log('Data was imported.'));