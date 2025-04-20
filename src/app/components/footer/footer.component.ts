import { Component } from '@angular/core';
import { ClientsComponent } from '../clients/clients.component';
import { NosotrosComponent } from "../nosotros/nosotros.component";

@Component({
  selector: 'app-footer',
  styleUrls: [
    "_desktop_footer.component.scss",
    "_mobile_footer.component.scss",
    "_tablet_footer.component.scss"
  ],
  imports: [ClientsComponent, NosotrosComponent],
  templateUrl: './footer.component.html'
})
export class FooterComponent {

}
