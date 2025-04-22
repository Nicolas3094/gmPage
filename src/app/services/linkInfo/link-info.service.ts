import { inject, Injectable } from '@angular/core';
import { FetchService } from '../fetchServices';
import { Linkinfo } from '../../models/linkinfo.model';
import { FirestoreLinkInfoRepository } from '../../repositories/firestore/linkInfo/firestore-link-info.repositoy';

@Injectable({
  providedIn: 'root'
})
export class LinkInfoService extends FetchService<Linkinfo>{

  constructor(){
    super(inject(FirestoreLinkInfoRepository));
  }

}
