import { Injectable } from '@angular/core';
import { FirestoreRepository } from '../firedata.repository';
import { Linkinfo } from '../../../models/linkinfo.model';
import { firstValueFrom, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreLinkInfoRepository extends FirestoreRepository<Linkinfo, Linkinfo> {

 override getColection(): Observable<Linkinfo[]> {
    return this.getCollection().pipe(map(colection => colection.map(el => el as Linkinfo)));
  }
  override getSingle(): Observable<Linkinfo> {
    return this.getFirst();
  }
  override async fecthAll(): Promise<Linkinfo[]> {
    return await firstValueFrom(this.getColection());
  }

  constructor(){
    super("links");
  }
}
