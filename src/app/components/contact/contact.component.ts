import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit , OnDestroy{
  
  private sub = new Subscription();
  private contactService = inject(ContactService);

  contacto ?: Contact;

  ngOnInit(): void {
    this.sub = this.contactService.getContacts().subscribe(value=>{
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
