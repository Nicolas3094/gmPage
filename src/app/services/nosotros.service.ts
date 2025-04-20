import { Injectable } from '@angular/core';
import { Nosotros } from '../models/nosotros.model';
import { Observable } from 'rxjs';
import { FiredataService } from './firedata.service';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService extends FiredataService<Nosotros, Nosotros> {

  constructor(){
    super("nosotros");
  }

  get clinets$(): Observable<Nosotros> {
    return this.getFirst();
  }
}
