import { DocumentReference } from "firebase/firestore";
import { Linkinfo } from "./linkinfo.model";

export interface Clientes {
    title:String;
    clients:Array<Linkinfo>;
}

export interface FirestoreClientes {
    title: String;
    clients: Array<DocumentReference<Linkinfo>>;
}
