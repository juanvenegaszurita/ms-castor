import firebase from 'firebase-admin'

export interface HeadersModel {
  UID: string;
  idEnterprise: number;
  isAdmin: boolean;
  userFirebase: firebase.auth.DecodedIdToken | null;
}