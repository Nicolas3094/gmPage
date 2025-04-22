import { inject, Injectable } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { FetchService } from '../fetchServices';
import { FirestoreContactRepository } from '../../repositories/firestore/contact/firestore-contact.repository';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends FetchService<Contact>{

  constructor(){
    super(inject(FirestoreContactRepository));
  }

}
