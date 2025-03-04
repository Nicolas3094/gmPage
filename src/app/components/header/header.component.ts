import { Component, HostListener } from '@angular/core';
import { HeaderInfo } from '../../models/header-info.model';
import { HEADER } from '../../app.config';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {DeviceDetectorService} from "ngx-device-detector";
import { Device } from '../../models/device.model';
@Component({
  standalone:true,
  selector: 'app-header',
  imports: [NgFor, NgIf,RouterModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  headerInfo: HeaderInfo = HEADER;
  device:Device;

  constructor(private router: Router, private deviceService:DeviceDetectorService) {
    this.device = new Device(this.deviceService);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.device = new Device(this.deviceService);
    console.log(this.device);
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
