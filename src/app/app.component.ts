import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SpinnerService } from './services/spinner.service';
import { Observable, Subscription } from 'rxjs';
import { SpinnerComponent } from './components/spinner/spinner.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'gm-web';

  shouldShowSpinner !: boolean;

  showSpinner$: Observable<boolean>;
  spinnerSubscription!: Subscription;

  private spinnerService: SpinnerService = inject(SpinnerService);

  constructor() {
    this.showSpinner$ = this.spinnerService.showSpinner$;
  }

  ngOnDestroy(): void {
    this.spinnerSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.spinnerSubscription = this.showSpinner$.subscribe(value => this.shouldShowSpinner = value);
  }


}
