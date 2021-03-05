import { EnterprisesModel } from "./enterprises.model";
import { UserEnterprisesModel } from "./user-enterprises.model";

export interface UsersModel {
    UID: string;
    email: string;
    nombre?: string;
    Enterprise?: EnterprisesModel[];
    userenterprises?: UserEnterprisesModel[];
}