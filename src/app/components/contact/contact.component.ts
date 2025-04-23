import { Component, inject, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact/contact.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  imports: [AsyncPipe, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
  

  private contactService = inject(ContactService);

  contacto$ !: Observable<Contact>;

  ngOnInit(): void {
    this.contacto$ =  this.contactService.data$;;
  }

  handleContact(url?: string) {
    if (url != null) {
      window.open(url, "_blanks");
    }
  }

}
