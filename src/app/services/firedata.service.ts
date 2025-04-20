import { inject, Injectable } from '@angular/core';
import { collection, collectionData, doc, DocumentData, Firestore, FirestoreDataConverter, getDoc, query } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class FiredataService<T, D> {

  protected firestore: Firestore = inject(Firestore);
  protected converter?: FirestoreDataConverter<D, DocumentData>;
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  async getByDocumentId(docId: string): Promise<T> {
    if (this.converter) {
      const documentRef = doc(this.firestore, this.name + "/" + docId).withConverter(this.converter);
      const document = await getDoc(documentRef);
      if (document.exists()) {
        const response = this.convertToOrigin(document.data());
        if (response) {
          return response;
        }
      }
    } else {
      const documentRef = doc(this.firestore, this.name + "/" + docId);
      const document = await getDoc(documentRef);

      if (document.exists()) {
        return document.data() as T;
      }
    }

    throw Error("No existe documento.");
  }

  protected getCollection(): Observable<any[]> {
    const itemsRef = collection(this.firestore, this.name);
    const q = query(itemsRef); // 👈 Ordena por campo
    return collectionData(q, { idField: 'id' });
  }

  protected convertToOrigin(firestoreObjet: D): Promise<T> | undefined {
    return undefined;
  }

  getFirst(): Observable<D> {
    return this.getCollection().pipe(map(collection => collection[0] as D));
  }
}
