import { inject, Injectable } from '@angular/core';
import { doc, DocumentData, Firestore, FirestoreDataConverter, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export abstract class FiredataService<T, D> {

  protected firestore : Firestore = inject(Firestore);

  abstract name : string;

  abstract converter : FirestoreDataConverter<D, DocumentData>;

  abstract convertToOrigin(firestoreObjet:D) : Promise<T>;

  async getByDocumentId(docId: string): Promise<T> { 
      const documentRef = doc(this.firestore, this.name + "/" + docId).withConverter(this.converter);
      const document = await getDoc(documentRef);
  
      if (document.exists()) {
        return this.convertToOrigin(document.data());
      }
  
      throw Error("No existe documento.");
    }

}
