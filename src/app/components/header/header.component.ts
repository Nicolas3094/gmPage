import {  Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { HeaderInfo } from '../../models/header-info.model';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { HeaderService } from '../../services/header/header.service';

@Component({
  selector: 'app-header',
  imports: [NgFor, RouterModule, NgIf, ContactComponent],
  templateUrl: './header.component.html',
  styleUrls: [
    "_desktop_header.component.scss",
    "_phone_header.component.scss",
    "_tablet_header.component.scss",
  ]
})

export class HeaderComponent implements OnInit {

  private heeaderService = inject(HeaderService);
  private router = inject(Router);

  videoSource?: String;
  headerInfo !: HeaderInfo;
  dataLoaded: boolean = false;
  hasExpanded: boolean = false;

  @ViewChild('videoElement') videoRef?: ElementRef;

  ngOnInit() {
    const value = this.heeaderService.getData();
    this.headerInfo = value;
    this.videoSource = value.videoPlayBack;
    this.dataLoaded = true;
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
}
