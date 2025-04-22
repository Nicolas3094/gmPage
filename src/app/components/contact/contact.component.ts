import { Component, inject } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  private contactService = inject(ContactService);

  contacto : Contact = this.contactService.getData();

  handleContact(url?: string) {
    if (url != null) {
      window.open(url, "_blanks");
    }
  }

}
