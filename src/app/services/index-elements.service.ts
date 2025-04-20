import { inject, Injectable } from '@angular/core';
import { map, Observable, take, tap } from 'rxjs';
import { IndexElement } from '../models/index-element.model';
import { collection, collectionData,  orderBy, query } from '@angular/fire/firestore';
import { SpinnerService } from './spinner.service';
import { FiredataService } from './firedata.service';

@Injectable({
  providedIn: 'root'
})
export class IndexElementsService extends FiredataService<IndexElement, IndexElement> {

  private spinnerService: SpinnerService = inject(SpinnerService);

  constructor(){
    super("indexElements")
  }
  
  get data$(): Observable<IndexElement[]> {
    return this.getCollection()
    .pipe(
      map(array=>array.map(element => {
          let indexElement = element as IndexElement;
          indexElement.url = indexElement.url.replace("embed/","watch?v=");
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
