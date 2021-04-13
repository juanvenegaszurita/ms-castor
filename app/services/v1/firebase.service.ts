import { environment } from '../../../environments/environment';
import firebase from 'firebase-admin'

export class FirebaseService {

  initFirebase(nameConexion: string = "ms-castor-firebase"): firebase.app.App {
    try {
      return firebase.initializeApp( JSON.parse(environment.FIREBASE_CASTOR), nameConexion );
    } catch (error) {
      return firebase.app(nameConexion);
    }
  }
  async validateToken(token: string): Promise<firebase.auth.DecodedIdToken | null> {
    const nameConexion = await this.initFirebase();
    let userCredential: firebase.auth.DecodedIdToken | null = null;
    try {
      userCredential = await nameConexion.auth().verifyIdToken(token);
    } catch (error) {
      console.log("Error => validateToken", error);
    }
    return userCredential;
  }
}