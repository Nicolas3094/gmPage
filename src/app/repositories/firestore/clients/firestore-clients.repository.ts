import { inject, Injectable } from '@angular/core';
import { forkJoin, from, map, Observable, switchMap } from 'rxjs';
import {  DocumentData } from '@angular/fire/firestore';
import { FirestoreLinkInfoRepository } from '../linkInfo/firestore-link-info.repositoy';
import { FirestoreRepository } from '../firedata.repository';
import { Clientes, FirestoreClientes } from '../../../models/clientes.model';
import { FireStorageRepository } from '../../firestorage/fire-storage.repository';

@Injectable({
  providedIn: 'root'
})
export class FirestoreClientsRepository extends FirestoreRepository<Clientes, FirestoreClientes> {

  private readonly linkService = inject(FirestoreLinkInfoRepository);

  private readonly storage = inject(FireStorageRepository);


  override getColection(): Observable<Clientes[]> {
    return this.clinets$.pipe(map(cliente => [cliente]));
  }

  override getSingle() : Observable<Clientes> {
    return this.clinets$;
  }
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

  get clinets$(): Observable<Clientes> {
    return this.getFirst()
      .pipe(
        switchMap(firestoreClientes => {
          // Convertimos todas las promesas en observables y procesamos las URLs
          const linksData$ = firestoreClientes.clients.map(clientRef => 
            from(this.linkService.getByDocumentId(clientRef.id)).pipe(
              switchMap(linkInfo => {
                if (linkInfo.url) {
                  return this.storage.getDownloadUrl(linkInfo.url).pipe(
                    map(downloadUrl => ({
                      ...linkInfo,
                      url: downloadUrl
                    }))
                  );
                }
                return [linkInfo];
              })
            )
          );
          
          // Combinamos todos los observables
          return forkJoin(linksData$).pipe(
            map((linksData) => ({
              title: firestoreClientes.title,
              clients: linksData
            } as Clientes))
          )
        })
      );
  }
}
