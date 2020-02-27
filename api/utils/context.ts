import { firestore, auth } from 'firebase-admin';

export interface Context {
  firestore: firestore.Firestore;
  auth: auth.Auth;
}
