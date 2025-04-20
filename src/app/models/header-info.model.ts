import { DocumentReference } from "firebase/firestore";
import { Contact } from "./contact.model";

export interface HeaderInfo {
    detalles:Array<String>;
    listado:Array<String>;
    contact: Contact;
    videoPlayBack: string;
}


export interface FirestoreHeaderInfo {
    detalles: Array<String>;
    listado: Array<String>;
    contact: DocumentReference<Contact>;
    videoPlayBack: string;
}
