import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-privacy',
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
  encapsulation: ViewEncapsulation.Emulated  // Asegúrate de que sea Emulated

})
export class PrivacyComponent {
  email: string = "info@gmartnewmedia.com";
  location: string = "Ometusco 96, Colonia Hipódromo Condesa, C.P 01600, Ciudad de México."
  phone: string = "+52 331-1336-736";
}
