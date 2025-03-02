import { Component } from '@angular/core';
import { IndexElement } from '../../models/index-element.model';
import { MAIN_INDEX_LIST } from '../../app.config';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-indice',
  imports: [NgFor, NgIf],
  templateUrl: './indice.component.html'
})
export class IndiceComponent {
  popup:boolean = false;
  elementsList:Array<IndexElement> = MAIN_INDEX_LIST;

  currentIndexElement?: IndexElement;

  handleButtoIndex(indexElement:IndexElement){
    console.log(indexElement.index);
    this.popup=true;
    this.currentIndexElement = indexElement;
  }
}
