import { NotificationsModel } from 'app/@models/notifications.model';
import { auth, firestore } from 'firebase-admin'

export class FirebaseService {
  private ENUM = "notifications";

  async validateToken(token: string): Promise<auth.DecodedIdToken | null> {
    let userCredential: auth.DecodedIdToken | null = null;
    try {
      userCredential = await auth().verifyIdToken(token);
    } catch (error) {
      console.log("Error => validateToken", error);
    }
    return userCredential;
  }
  static async insertNotifications(mensaje: string, idEnterprise: number, type: TypeNotifications, isAdmin: boolean | undefined = undefined) {
    const fecha = new Date();
    const id = `${idEnterprise}-${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getUTCFullYear()}`;
    const db = firestore();
    
    if( isAdmin === undefined ) {
      const notificationAdmin = db.collection(collectionEnum.notifications).doc(`admin-${id}`)
      await this.notifications(notificationAdmin, mensaje, type);
      const notificationNoAdmin = db.collection(collectionEnum.notifications).doc(`noAdmin-${id}`)
      await this.notifications(notificationNoAdmin, mensaje, type);
    } else {
      const notification = db.collection(collectionEnum.notifications).doc(`${isAdmin? 'admin' : 'noAdmin'}-${id}`)
      await this.notifications(notification, mensaje, type);
    }
  }
  private static async notifications(notification: firestore.DocumentReference<firestore.DocumentData>, mensaje: string, type: TypeNotifications) {
    if( !(await notification.get()).exists )
      await notification.set( { [TypeNotifications.BIRTHDAYS]: [], [TypeNotifications.TASKS]: [] } );
    await notification.update( { [type]: firestore.FieldValue.arrayUnion(mensaje) } );
  }
}
export enum TypeNotifications {
  "TASKS"= "tasks",
  "BIRTHDAYS" = "birthdays"
}
enum collectionEnum {
  "notifications" = "notifications"

}