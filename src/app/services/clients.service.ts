import { inject, Injectable } from '@angular/core';
import { Clientes, FirestoreClientes } from '../models/clientes.model';
import { forkJoin, from, map, Observable, switchMap } from 'rxjs';
import { collection, collectionData, doc, DocumentData, Firestore, getDoc, query } from '@angular/fire/firestore';
import { LinkInfoService } from './link-info.service';
import { Linkinfo } from '../models/linkinfo.model';
import { FiredataService } from './firedata.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService extends FiredataService<Clientes, FirestoreClientes> {

  private readonly linkService = inject(LinkInfoService);

  protected override converter = {
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

  protected override async convertToOrigin(firestoreObjet: FirestoreClientes): Promise<Clientes> {
    let clientsArr: Array<Linkinfo> = [];

    for (let i = 0; i < firestoreObjet.clients.length; i++) {
      const client = await this.linkService.getByDocumentId(firestoreObjet.clients[i].id);
      clientsArr.push(client);
    }

    return {
      title: firestoreObjet.title,
      clients: clientsArr
    } as Clientes;
  }

  constructor() {
    super("clients");
  }

  get clinets$(): Observable<Clientes> {
    return this.getFirst()
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
}
