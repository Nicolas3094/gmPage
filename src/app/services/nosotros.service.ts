import { inject, Injectable } from '@angular/core';
import { FirestoreNosotros, Nosotros } from '../models/nosotros.model';
import { forkJoin, from, map, Observable, switchMap } from 'rxjs';
import { collection, collectionData, doc, DocumentData, Firestore, getDoc, query } from '@angular/fire/firestore';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {
  private firestore = inject(Firestore);
  private contactService = inject(ContactService);
  private readonly name = "nosotros";
  private readonly converter = {
    toFirestore(contact: FirestoreNosotros): DocumentData {
      return {
        contact: contact.contact,
        descriptions: contact.descriptions,
        title: contact.title
      };
    },
    fromFirestore(snapshot: any, options: any): FirestoreNosotros {
      const data = snapshot.data(options);
      return {
        contact: data.contact,
        descriptions: data.descriptions,
        title: data.title
      };
    }
  };
  constructor() { }

  get clinets$(): Observable<Nosotros> {
    return this.getCollections()
      .pipe(
        switchMap(firestoreNosotros => {
          // Convertimos todas las promesas en observables
          const contact$ = from(this.contactService.getByDocumentId(firestoreNosotros.contact.id));
          // Combinamos todos los observables
          return forkJoin([contact$]).pipe(
            map(([contact$]) => ({
              title: firestoreNosotros.title,
              descriptions: firestoreNosotros.descriptions,
              contact: contact$
            } as Nosotros))
          )
        })
      );
  }

  private getCollections(): Observable<FirestoreNosotros> {
    const itemsRef = collection(this.firestore, "nosotros");
    const q = query(itemsRef); // 👈 Ordena por campo
    return collectionData(q, { idField: 'id' })
      .pipe(map(collection => collection[0] as FirestoreNosotros));
  }

  async getByDocumentId(docId: string): Promise<Nosotros> {
    const documentRef = doc(this.firestore, this.name + "/" + docId).withConverter(this.converter);
    const document = await getDoc(documentRef);

    // Combinamos todos los observables
    if (document.exists()) {

      const contact = await this.contactService.getByDocumentId(document.data()!.contact.id);

      return {
        contact: contact,
        descriptions: document.data().descriptions,
        title: document.data().title
      } as Nosotros;
    }

    throw Error("No existe documento.");
  }
}
