import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ExpandedObject } from '../models/ExpandendObject.model';

@Injectable({
  providedIn: 'root'
})
export class ExpandElementService {
  private eventSubject = new Subject<ExpandedObject>();

// Método para emitir eventos
  emitEvent(payload: ExpandedObject) {
  this.eventSubject.next(payload);
}

  // Observable para suscribirse a eventos
  get events$() {
    return this.eventSubject.asObservable();
  }

}
