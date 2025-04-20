import { inject, Injectable } from '@angular/core';
import { Clientes, FirestoreClientes } from '../models/clientes.model';
import { forkJoin, from, map, Observable, switchMap } from 'rxjs';
import { collection, collectionData, doc, DocumentData, Firestore, getDoc, query } from '@angular/fire/firestore';
import { LinkInfoService } from './link-info.service';
import { Linkinfo } from '../models/linkinfo.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private readonly name = "clients";

  private readonly firestore = inject(Firestore);
  private readonly linkService = inject(LinkInfoService);
  private readonly converter = {
    toFirestore(clientes: FirestoreClientes): DocumentData {
      return {
        clients: clientes.clients,
        title: clientes.title
      };
    },
    fromFirestore(snapshot: any, options: any): FirestoreClientes {
      const data = snapshot.data(options);
      return {
        clients: data.clients,
        title: data.title
      };
    }
  };
  constructor() { }

  get clinets$(): Observable<Clientes> {
    return this.getCollections()
      .pipe(
        switchMap(firestoreClientes => {
          // Convertimos todas las promesas en observables
          let linksData: Array<Observable<Linkinfo>> = [];
          for (let i = 0; i < firestoreClientes.clients.length; i++) {
            linksData.push(from(this.linkService.getByDocumentId(firestoreClientes.clients[i].id)));
          }
          // Combinamos todos los observables
          return forkJoin(linksData).pipe(
            map((linksData) => ({
              title: firestoreClientes.title,
              clients: linksData
            } as Clientes))
          )
        })
      );
  }

  private getCollections(): Observable<FirestoreClientes> {
    const itemsRef = collection(this.firestore, this.name);
    const q = query(itemsRef); // 👈 Ordena por campo
    return collectionData(q, { idField: 'id' }).pipe(map(collection => collection[0] as FirestoreClientes));
  }

  async getByDocumentId(docId: string): Promise<Clientes> {
    const documentRef = doc(this.firestore, this.name + "/" + docId).withConverter(this.converter);
    const document = await getDoc(documentRef);

    if (document.exists()) {
      let clientsArr : Array<Linkinfo>= []
      
      for (let i = 0; i < document.data()!.clients.length; i++) {
        const client =await this.linkService.getByDocumentId(document.data()!.clients[i].id);
        clientsArr.push(client);
      }

      return {
        title: document.data().title,
        clients: clientsArr
      } as Clientes;
    }

    throw Error("No existe documento.");
  }
}
