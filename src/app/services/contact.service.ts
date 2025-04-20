import { inject, Injectable } from '@angular/core';
import { Contact, FirestoreContact } from '../models/contact.model';
import { forkJoin, from, map, Observable, switchMap } from 'rxjs';
import { collection, collectionData, doc, DocumentData, Firestore, getDoc, query } from '@angular/fire/firestore';
import { LinkInfoService } from './link-info.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly name = "contact";

  private firestore = inject(Firestore);
  private linkService = inject(LinkInfoService);
  
  private readonly converter = {
    toFirestore(contact: FirestoreContact): DocumentData {
      return {
        email: contact.email,
        instagram: contact.instagram,
        whatsApp: contact.whatsApp
      };
    },
    fromFirestore(snapshot: any, options: any): FirestoreContact {
      const data = snapshot.data(options);
      return {
        email: data.email,
        instagram: data.instagram,
        whatsApp: data.whatsApp
      };
    }
  };

  getContacts(): Observable<Contact> {
    return this.getCollections()
      .pipe(
        switchMap(firestoreContact => {
          // Convertimos todas las promesas en observables
          const email$ = from(this.linkService.getByDocumentId(firestoreContact.email.id));
          const whatsApp$ = from(this.linkService.getByDocumentId(firestoreContact.whatsApp.id));
          const instagram$ = from(this.linkService.getByDocumentId(firestoreContact.instagram.id));
          // Combinamos todos los observables
          return forkJoin([email$, whatsApp$, instagram$]).pipe(
            map(([email, whatsApp, instagram]) => ({
              email,
              whatsApp: whatsApp,
              instagram
            } as Contact))
          )
        })
      );
  }

  private getCollections(): Observable<FirestoreContact> {
    const itemsRef = collection(this.firestore, this.name);
    const q = query(itemsRef); // 👈 Ordena por campo
    return collectionData(q, { idField: 'id' }).pipe(map(collection => collection[0] as FirestoreContact));
  }

  async getByDocumentId(docId: string): Promise<Contact> {
    const documentRef = doc(this.firestore, this.name + "/" + docId).withConverter(this.converter);
    const document = await getDoc(documentRef);

    // Combinamos todos los observables
    if (document.exists()) {
      const email = await this.linkService.getByDocumentId(document.data()!.email.id);
      const whatsApp = await this.linkService.getByDocumentId(document.data()!.whatsApp.id);
      const instagram = await this.linkService.getByDocumentId(document.data()!.instagram.id);
      return {
        email: email,
        whatsApp: whatsApp,
        instagram: instagram
      } as Contact;
    }

    throw Error("No existe documento.");
  }

}
