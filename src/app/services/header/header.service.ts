import { inject, Injectable } from '@angular/core';
import { HeaderInfo } from '../../models/header-info.model';
import { FetchService } from '../fetchServices';
import { FirestoreHeaderRepository } from '../../repositories/firestore/header/header.repository';

@Injectable({
  providedIn: 'root'
})
export class HeaderService extends FetchService<HeaderInfo>{

  constructor(){
    super(inject(FirestoreHeaderRepository));
  }

}