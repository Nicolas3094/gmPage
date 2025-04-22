import { inject, Injectable } from '@angular/core';
import { FetchService } from '../fetchServices';
import { Nosotros } from '../../models/nosotros.model';
import { FirestoreNosotrosRepository } from '../../repositories/firestore/nosotros/firestore-nosotros.repository';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService extends FetchService<Nosotros>{

  constructor(){
    super(inject(FirestoreNosotrosRepository));
  }

}
