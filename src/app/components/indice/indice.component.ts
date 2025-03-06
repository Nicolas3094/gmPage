import { Component } from '@angular/core';
import { IndexElement } from '../../models/index-element.model';
import { MAIN_INDEX_LIST } from '../../app.config';
import { NgFor, NgIf } from '@angular/common';
import { OverlayVideoComponent } from '../overlay-video/overlay-video.component';

@Component({
  standalone: true,
  selector: 'app-indice',
  imports: [NgFor, NgIf, OverlayVideoComponent],
  templateUrl: './indice.component.html'
})
export class IndiceComponent {
  popup: boolean = false;
  elementsList: Array<IndexElement> = MAIN_INDEX_LIST;

  currentIndexElement?: IndexElement;

  handleButtoIndex(indexElement: IndexElement) {
    console.log(indexElement.index);
    this.currentIndexElement = indexElement;
    switch (indexElement.type) {
      case "vimeo":
      case "youtube":
        this.popup = true;
        break;
      default:
        window.open(indexElement.url, "_blanks");
    }
  }

  close() {
    this.popup = false;
    this.currentIndexElement = undefined;
  }
}
