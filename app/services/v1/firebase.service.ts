import firebase from 'firebase-admin'

export class FirebaseService {

  async validateToken(token: string): Promise<firebase.auth.DecodedIdToken | null> {
    let userCredential: firebase.auth.DecodedIdToken | null = null;
    try {
      userCredential = await firebase.auth().verifyIdToken(token);
    } catch (error) {
      console.log("Error => validateToken", error);
    }
    return userCredential;
  }
}