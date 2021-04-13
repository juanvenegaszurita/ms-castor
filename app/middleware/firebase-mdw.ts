import { Request, Response, NextFunction } from 'express';
import { FirebaseService } from '../services/v1/firebase.service';
import { EncryptionUtils, TypeData } from '../utils/encryption.utils';

export class FirebaseMDW {
  static async verifyToken( req: Request, res: Response, next: NextFunction) {
    const excludedPaths = [
      "/transbank/webpayplus/retorno",
    ];
    if(excludedPaths.includes(req.url)) return  next();

    const token: string = `${req.headers.token}`;
    const fbs = new FirebaseService();
    const userFirebase = await fbs.validateToken(token);
    if( userFirebase !== null ) {
      const UID: string = `${userFirebase.uid}`;
      const idEnterprise: number = isNaN(parseInt(EncryptionUtils.decrypt(`${req.headers.identerprise}`, TypeData.STRING)+''))? 0 : parseInt(EncryptionUtils.decrypt(`${req.headers.identerprise}`, TypeData.STRING)+'');
      const isAdmin: boolean = EncryptionUtils.decrypt(`${req.headers.isadmin}`, TypeData.STRING) === 'true';
      res.locals = { UID, idEnterprise, isAdmin, userFirebase };

      return next();
    } else {
      res.status(401)
        .json({ code: 401, message: "Token no enviado", payload: {} });
    }
  }
}