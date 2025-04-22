import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreRepository } from '../firedata.repository';
import { Nosotros } from '../../../models/nosotros.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreNosotrosRepository extends FirestoreRepository<Nosotros, Nosotros> {

  constructor(){
    super("nosotros");
  }

  get clinets$(): Observable<Nosotros> {
    return this.getFirst();
  }
}
