import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ClientsService } from './services/clients/clients.service';
import { ContactService } from './services/contact/contact.service';
import { HeaderService } from './services/header/header.service';
import { IndexElementsService } from './services/indexElements/index-elements.service';
import { NosotrosService } from './services/nosotros/nosotros.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'gm-web';

  shouldShowSpinner: boolean = true;

  private clientService = inject(ClientsService);
  private contactService = inject(ContactService);
  private headerService = inject(HeaderService);
  private indexService = inject(IndexElementsService);
  private nosotrosService = inject(NosotrosService);


  ngOnInit(): void {
    this.ejecutarPromesas();
  }

  async ejecutarPromesas() {
    try {
      await Promise.all(
        [
          this.clientService.fetch(),
          this.contactService.fetch(),
          this.headerService.fetch(),
          this.indexService.fetchAll(),
          this.nosotrosService.fetch()
        ]
      );
      setTimeout(() => this.shouldShowSpinner = false, Math.random() * 800);
    } catch (error) {
      console.error('Error en ejecucion de promesas:', error);
    }
  }
}
