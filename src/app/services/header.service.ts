import { inject, Injectable } from '@angular/core';
import { FirestoreHeaderInfo, HeaderInfo } from '../models/header-info.model';
import { forkJoin, from, map, Observable, switchMap, take } from 'rxjs';
import { ContactService } from './contact.service';
import { collection, collectionData, Firestore, query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private readonly name = "header";

  private firestore = inject(Firestore);

  private contactService = inject(ContactService);

  get headerInfo$(): Observable<HeaderInfo> {
    return this.getCollections()
      .pipe(
        switchMap(firestoreHeader => {
          // Convertimos todas las promesas en observables
          const contact$ = from(this.contactService.getByDocumentId(firestoreHeader.contact.id));
          // Combinamos todos los observables
          return forkJoin([contact$]).pipe(
            map(([contact$]) => ({
              detalles: firestoreHeader.detalles,
              listado: firestoreHeader.listado,
              contact: contact$,
              videoPlayBack: firestoreHeader.videoPlayBack
            } as HeaderInfo))
          )
        })
      );
  }

  private getCollections(): Observable<FirestoreHeaderInfo> {
    const itemsRef = collection(this.firestore, this.name);
    const q = query(itemsRef); // 👈 Ordena por campo
    return collectionData(q, { idField: 'id' }).pipe(map(collection => collection[0] as FirestoreHeaderInfo));
  }

}
