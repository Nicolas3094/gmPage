import { inject, Injectable } from '@angular/core';
import { FirestoreFooterInfo, FooterInfo } from '../models/footer-info.model';
import { forkJoin, from, map, Observable, switchMap, take } from 'rxjs';
import { ClientsService } from './clients.service';
import { collection, collectionData, Firestore, query } from '@angular/fire/firestore';
import { NosotrosService } from './nosotros.service';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  private readonly clientesService = inject(ClientsService);
  private readonly nosotrosService = inject(NosotrosService);
  private readonly firestore = inject(Firestore);

  constructor() {
  }

  private getCollections(): Observable<FirestoreFooterInfo> {
    const itemsRef = collection(this.firestore, "footer");
    const q = query(itemsRef); // 👈 Ordena por campo
    return collectionData(q, { idField: 'id' }).pipe(map(collection => collection[0] as FirestoreFooterInfo));
  }

  get footerInfo$(): Observable<FooterInfo> {
    return this.getCollections().pipe(
      switchMap(firestoreFooter => {
        // Convertimos todas las promesas en observables
        const clients$ = from(this.clientesService.getByDocumentId(firestoreFooter.clientes.id));
        const nosotros$ = from(this.nosotrosService.getByDocumentId(firestoreFooter.nosotros.id));

        // Combinamos todos los observables
        return forkJoin([clients$, nosotros$]).pipe(
          map(([clients$, nosotros$]) => ({
            clientes: clients$,
            nosotros: nosotros$
          } as FooterInfo))
        )
      })
    );
  }

}
