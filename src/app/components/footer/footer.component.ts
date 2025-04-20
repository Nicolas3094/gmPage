import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FooterInfo } from '../../models/footer-info.model';
import { NgFor, NgIf } from '@angular/common';
import { FooterService } from '../../services/footer.service';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-footer',
  styleUrls: [
    "_desktop_footer.component.scss",
    "_mobile_footer.component.scss",
    "_tablet_footer.component.scss"
  ],
  imports: [NgFor, NgIf],
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnDestroy {

  footerService: FooterService = inject(FooterService);
  footerInfo!: FooterInfo;

  clientsInfo!: String;

  dataloaded: boolean = false;

  private subcription !: Subscription;

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  constructor() {
    this.subcription = this.footerService.footerInfo$.subscribe(value => {
      this.footerInfo = value;
      this.clientsInfo = value.clientes.clients.map(val => val.title).join(", ");
      this.dataloaded = true;
    });
  }

  handleContact(url?: string) {
    if (url != null) {
      window.open(url, "_blanks");
    }
  }
}
