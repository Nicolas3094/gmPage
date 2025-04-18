import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { IndexElement } from '../models/index-element.model';
import { collection, collectionData, Firestore, Index, orderBy, query } from '@angular/fire/firestore';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class IndexElementsService {

  private firestore = inject(Firestore);
  private spinnerService: SpinnerService = inject(SpinnerService);

  getCollection(): Observable<IndexElement[]> {
    return this.getCollections()
    .pipe(
      tap(value => this.spinnerService.emitLoadedDta(true)),
      map(array=>array.map(element => {
          let indexElement = element as IndexElement;
          indexElement.url = indexElement.url.replace("embed/","watch?v=");
          return indexElement;
      }))
    );
  }

  // Obtener colección
  getCollections(): Observable<any[]> {
    this.spinnerService.emitLoadedDta(false);
    const itemsRef = collection(this.firestore, "indexElements");
    const q = query(itemsRef, orderBy("order", "asc")); // 👈 Ordena por campo
    return collectionData(q, { idField: 'id' });
  }
}
