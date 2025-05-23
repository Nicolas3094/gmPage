import {  AfterContentInit, AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HeaderInfo } from '../../models/header-info.model';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { HeaderService } from '../../services/header/header.service';
import { Observable, Subscription, tap } from 'rxjs';
import { ExpandElementService } from '../../services/expand/expand-element.service';

@Component({
  selector: 'app-header',
  imports: [NgFor, RouterModule, NgIf, ContactComponent, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrls: [
    "_desktop_header.component.scss",
    "_phone_header.component.scss",
    "_tablet_header.component.scss",
  ]
})

export class HeaderComponent implements OnInit, OnDestroy {
  


  private heeaderService = inject(HeaderService);
  private router = inject(Router);
  private expandElementService = inject(ExpandElementService);
  private subscription : Subscription = new Subscription();

  videoSource?: String;
  headerInfo$ !: Observable<HeaderInfo>;

  menuList !: ElementRef[];
  hasExpanded: boolean = false;

  @ViewChild('videoElement') videoRef?: ElementRef;

  ngOnInit() {
    this.headerInfo$ = this.heeaderService.data$.pipe(
      tap(value=>this.videoSource = value.videoPlayBack)
    );
    
    this.subscription = this.heeaderService.getMenuRefs$.subscribe(value => this.menuList = value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onIndex() {
    console.log("index");
    this.router.navigateByUrl("index");
  }

  onImages() {
    console.log("images")
    this.router.navigateByUrl("images");
  }

  handleContact(url?: string) {
    if (url != null) {
      window.open(url, "_blanks");
    }
  }

  handleElementMenu(elementRef:ElementRef){
    this.expandElementService.focusOnElement(elementRef);
  }
}
