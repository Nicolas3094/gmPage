import { Component } from '@angular/core';
import { HeaderInfo } from '../../models/header-info.model';
import { HEADER } from '../../app.config';
import { NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgFor, RouterModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  headerInfo: HeaderInfo = HEADER;

  constructor(private router: Router) {
  }


  onIndex() {
    console.log("index");
    this.router.navigateByUrl("index");
  }

  onImages() {
    console.log("images")
    this.router.navigateByUrl("images");
  }

}
