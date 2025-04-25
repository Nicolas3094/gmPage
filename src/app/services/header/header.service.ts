import { ElementRef, inject, Injectable } from '@angular/core';
import { HeaderInfo } from '../../models/header-info.model';
import { FetchService } from '../fetchServices';
import { FirestoreHeaderRepository } from '../../repositories/firestore/header/header.repository';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService extends FetchService<HeaderInfo>{

  private menuRefs = new Subject<ElementRef[]>();

  constructor(){
    super(inject(FirestoreHeaderRepository));
  }


  get getMenuRefs$() : Observable<ElementRef[]> {
    return this.menuRefs.asObservable();
  }

  pushMenuRefs(refs: ElementRef[]) {
    this.menuRefs.next(refs);
  }

}