import { DocumentReference } from "firebase/firestore";
import { Clientes } from "./clientes.model";
import { Nosotros } from "./nosotros.model";

export interface FooterInfo {
    clientes :Clientes;
    nosotros:Nosotros;
}


export interface FirestoreFooterInfo {
    clientes : DocumentReference<Clientes>;
    nosotros : DocumentReference<Nosotros>;
}
