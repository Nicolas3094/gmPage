import { Component } from '@angular/core';
import { IndexElement } from '../../models/index-element.model';
import { MAIN_INDEX_LIST } from '../../app.config';
import { NgFor, NgIf } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../../safe-url.pipe';
import { OverlayVideoComponent } from '../overlay-video/overlay-video.component';

@Component({
  standalone:true,
  selector: 'app-indice',
  imports: [NgFor, NgIf, OverlayVideoComponent],
  templateUrl: './indice.component.html'
})
export class IndiceComponent {
  popup:boolean = false;
  elementsList:Array<IndexElement> = MAIN_INDEX_LIST;

  currentIndexElement?: IndexElement;
  sanitizer: DomSanitizer;

  constructor(sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  handleButtoIndex(indexElement:IndexElement){
    console.log(indexElement.index);
    this.currentIndexElement = indexElement;
    if (indexElement.type === "vimeo" || indexElement.type === "youtube") {
      this.popup = true;
    } else {
      window.open(indexElement.url, "_blanks");
    }
  }

  hanleUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  close() {
    this.popup = false;
    this.currentIndexElement = undefined;
  }
}
