import { EnterprisesModel } from "./enterprises.model";

export interface UsersModel {
    UID: string;
    idEnterprise: number;
    email: string;
    nombre?: string;
    cargo?: string;
    enterprise?: EnterprisesModel[];
}