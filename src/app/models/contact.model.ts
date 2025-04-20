import { DocumentReference } from "firebase/firestore";
import { Linkinfo } from "./linkinfo.model";

export interface Contact {
    email: Linkinfo;
    whatsApp: Linkinfo;
    instagram: Linkinfo;
}


export interface FirestoreContact {
    email: DocumentReference<Linkinfo>;
    whatsApp: DocumentReference<Linkinfo>;
    instagram: DocumentReference<Linkinfo>;
}
