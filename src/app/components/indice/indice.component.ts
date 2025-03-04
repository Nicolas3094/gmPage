import { Component } from '@angular/core';
import { IndexElement } from '../../models/index-element.model';
import { MAIN_INDEX_LIST } from '../../app.config';
import { NgFor, NgIf } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../../safe-url.pipe';
import { Device } from '../../models/device.model';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  standalone:true,
  selector: 'app-indice',
  imports: [NgFor, NgIf, SafeUrlPipe],
  templateUrl: './indice.component.html'
})
export class IndiceComponent {
  popup:boolean = false;
  elementsList:Array<IndexElement> = MAIN_INDEX_LIST;

  currentIndexElement?: IndexElement;
  sanitizer: DomSanitizer;

  device:Device;


  constructor(sanitizer: DomSanitizer, deviceService:DeviceDetectorService) {
    this.sanitizer = sanitizer;
    this.device = new Device(deviceService);
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
