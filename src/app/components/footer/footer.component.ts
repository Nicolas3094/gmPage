import { Component } from '@angular/core';
import { FooterInfo } from '../../models/footer-info.model';
import { FOOTER } from '../../app.config';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [NgFor],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  footerInfo:FooterInfo = FOOTER;

  clientsInfo:String;

  constructor(){
     this.clientsInfo = FOOTER.clientes.clients.map(val=>val.title).join(", ");
  }  

}
