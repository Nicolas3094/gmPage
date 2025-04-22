import { Injectable } from '@angular/core';
import { firstValueFrom, map, Observable } from 'rxjs';
import { FirestoreRepository } from '../firedata.repository';
import { Nosotros } from '../../../models/nosotros.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreNosotrosRepository extends FirestoreRepository<Nosotros, Nosotros> {
  
  override getColection(): Observable<Nosotros[]> {
    return this.getCollection().pipe(map(colection => colection.map(el => el as Nosotros)));
  }
  override getSingle(): Observable<Nosotros> {
    return this.getFirst();
  }
  override async fecthAll(): Promise<Nosotros[]> {
    return await firstValueFrom(this.getColection());
  }

  constructor(){
    super("nosotros");
  }

  get clinets$(): Observable<Nosotros> {
    return this.getFirst();
  }
}
