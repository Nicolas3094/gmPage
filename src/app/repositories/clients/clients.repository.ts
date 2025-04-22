import { inject, Injectable } from '@angular/core';
import { Clientes, FirestoreClientes } from '../../models/clientes.model';
import { forkJoin, from, map, Observable, switchMap } from 'rxjs';
import {  DocumentData } from '@angular/fire/firestore';
import { Linkinfo } from '../../models/linkinfo.model';
import { FirestoreRepository } from '../firestore/firedata.repository';
import { FirestoreLinkInfoRepository } from '../firestore/linkInfo/firestore-link-info.repositoy';

@Injectable({
  providedIn: 'root'
})
export class ClientsRepository extends FirestoreRepository<Clientes, FirestoreClientes> {

  private readonly linkService = inject(FirestoreLinkInfoRepository);

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

  constructor() {
    super("clients");
  }

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
