import { DocumentReference } from "firebase/firestore";
import { Contact } from "./contact.model";

export interface Nosotros {
    title:String;
    contact: Contact;
    descriptions:Array<String>;
}

export interface FirestoreNosotros {
    title:String;
    contact: DocumentReference<Contact>;
    descriptions:Array<String>;
}
