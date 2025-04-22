import { inject, Injectable } from '@angular/core';
import { IndexElement } from '../../models/index-element.model';
import { FetchService } from '../fetchServices';
import { FirestoreIndexElementsRepository } from '../../repositories/firestore/index/firestore-index-elements.repository';

@Injectable({
  providedIn: 'root'
})
export class IndexElementsService extends FetchService<IndexElement>{

  constructor(){
    super(inject(FirestoreIndexElementsRepository));
  }

}
