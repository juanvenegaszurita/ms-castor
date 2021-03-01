import { EnterprisesModel } from "./enterprises.model";

export interface UsersModel {
    UID: string;
    email: string;
    nombre?: string;
    cargo?: string;
    isAdmin: boolean;
    Enterprise?: EnterprisesModel[];
}