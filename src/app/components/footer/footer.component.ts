import { Component, inject } from '@angular/core';
import { FooterInfo } from '../../models/footer-info.model';
import { NgFor } from '@angular/common';
import { FooterService } from '../../services/footer.service';

@Component({
  standalone: true,
  selector: 'app-footer',
  styleUrls: [
    "_desktop_footer.component.scss",
    "_mobile_footer.component.scss",
    "_tablet_footer.component.scss"
  ],
  imports: [NgFor],
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  footerService: FooterService = inject(FooterService);
  footerInfo!: FooterInfo;

  clientsInfo: String;

  constructor() {
    this.footerInfo = this.footerService.getFooterInfo();
    this.clientsInfo = this.footerInfo.clientes.clients.map(val => val.title).join(", ");
  }

  handleContact(url?: string) {
    if (url != null) {
      window.open(url, "_blanks");
    }
  }
}
