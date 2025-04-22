import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreRepository } from '../firedata.repository';
import { HeaderInfo } from '../../../models/header-info.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreHeaderRepository extends FirestoreRepository<HeaderInfo, HeaderInfo> {
  
  constructor(){
    super("header");
  }

  get headerInfo$(): Observable<HeaderInfo> {
    return this.getFirst();
  }
}
