import { inject, Injectable } from '@angular/core';
import { forkJoin, from, map, Observable, switchMap } from 'rxjs';
import {  DocumentData } from '@angular/fire/firestore';
import { FirestoreLinkInfoRepository } from '../linkInfo/firestore-link-info.repositoy';
import { FirestoreRepository } from '../firedata.repository';
import { Contact, FirestoreContact } from '../../../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreContactRepository extends FirestoreRepository<Contact, FirestoreContact> {

  private linkService = inject(FirestoreLinkInfoRepository);

  protected override converter = {
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

  protected override async convertToOrigin(firestoreObjet: FirestoreContact): Promise<Contact> {
    const email = await this.linkService.getByDocumentId(firestoreObjet.email.id);
    const whatsApp = await this.linkService.getByDocumentId(firestoreObjet.whatsApp.id);
    const instagram = await this.linkService.getByDocumentId(firestoreObjet.instagram.id);
    return {
      email: email,
      whatsApp: whatsApp,
      instagram: instagram
    } as Contact;
  }

  constructor() {
    super("contact")
  }

  getContacts(): Observable<Contact> {
    return this.getFirst()
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


}
