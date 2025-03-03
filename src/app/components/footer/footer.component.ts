import { Component } from '@angular/core';
import { FooterInfo } from '../../models/footer-info.model';
import { FOOTER } from '../../app.config';
import { NgFor, NgIf } from '@angular/common';
import { SafeUrlPipe } from '../../safe-url.pipe';
import { Linkinfo } from '../../models/linkinfo.model';

@Component({
  selector: 'app-footer',
  imports: [NgFor, NgIf],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  footerInfo:FooterInfo = FOOTER;

  clientsInfo:String;

  constructor(){
     this.clientsInfo = FOOTER.clientes.clients.map(val=>val.title).join(", ");
  }  

  handleContact(url?: string) {
    if (url != null) {
      window.open(url, "_blanks");
    }
  }


}
