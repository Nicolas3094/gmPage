import { Injectable } from '@angular/core';
import { HeaderInfo } from '../models/header-info.model';
import { Observable } from 'rxjs';
import { FiredataService } from './firedata.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService extends FiredataService<HeaderInfo, HeaderInfo> {
  
  constructor(){
    super("header");
  }

  get headerInfo$(): Observable<HeaderInfo> {
    return this.getFirst();
  }
}
