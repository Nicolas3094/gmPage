import { Injectable } from '@angular/core';
import { firstValueFrom, map, Observable } from 'rxjs';
import { FirestoreRepository } from '../firedata.repository';
import { HeaderInfo } from '../../../models/header-info.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreHeaderRepository extends FirestoreRepository<HeaderInfo, HeaderInfo> {

  override getColection(): Observable<HeaderInfo[]> {
    return this.getCollection().pipe(map(colection => colection.map(el => el as HeaderInfo)));
  }
  override getSingle(): Observable<HeaderInfo> {
    return this.getFirst();
  }
  override async fecthAll(): Promise<HeaderInfo[]> {
    return await firstValueFrom(this.getColection());
  }
  
  constructor() {
    super("header");
  }

  get headerInfo$(): Observable<HeaderInfo> {
    return this.getFirst();
  }
}
