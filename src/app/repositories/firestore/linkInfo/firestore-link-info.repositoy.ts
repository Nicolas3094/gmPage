import { Injectable } from '@angular/core';
import { FirestoreRepository } from '../firedata.repository';
import { Linkinfo } from '../../../models/linkinfo.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreLinkInfoRepository extends FirestoreRepository<Linkinfo, Linkinfo> {
  constructor(){
    super("links");
  }
}
