import { inject, Injectable } from '@angular/core';
import { firstValueFrom, map, Observable, tap } from 'rxjs';
import { collection, collectionData, orderBy, query } from '@angular/fire/firestore';
import { FirestoreRepository } from '../firedata.repository';
import { IndexElement } from '../../../models/index-element.model';
import { SpinnerService } from '../../../services/spinner/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreIndexElementsRepository extends FirestoreRepository<IndexElement, IndexElement> {

  private spinnerService: SpinnerService = inject(SpinnerService);

  override getColection(): Observable<IndexElement[]> {
    return this.data$;
  }
  override getSingle(): Observable<IndexElement> {
    return this.data$.pipe(map( data => data[0]));
  }
  override async fecthAll(): Promise<IndexElement[]> {
    return await firstValueFrom(this.getColection());
  }


  constructor() {
    super("indexElements")
  }

  get data$(): Observable<IndexElement[]> {
    return this.getCollection()
      .pipe(
        map(array => array.map(element => {
          let indexElement = element as IndexElement;
          indexElement.url = indexElement.url.replace("embed/", "watch?v=");
          return indexElement;
        })),
        tap(value => this.spinnerService.emitLoadedDta(true))
      );
  }

  // Obtener colección
  override getCollection(): Observable<any[]> {
    this.spinnerService.emitLoadedDta(false);
    const itemsRef = collection(this.firestore, "indexElements");
    const q = query(itemsRef, orderBy("order", "asc")); // 👈 Ordena por campo
    return collectionData(q, { idField: 'id' });
  }
}
