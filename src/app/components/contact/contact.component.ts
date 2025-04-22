import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';
import { FirestoreContactRepository } from '../../repositories/firestore/contact/firestore-contact.repository';

@Component({
  selector: 'app-contact',
  imports: [NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit , OnDestroy{
  
  private sub = new Subscription();
  private contactRepository = inject(FirestoreContactRepository);

  contacto ?: Contact;

  ngOnInit(): void {
    this.sub = this.contactRepository.getContacts().subscribe(value=>{
      this.contacto = value;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  handleContact(url?: string) {
    if (url != null) {
      window.open(url, "_blanks");
    }
  }

}
