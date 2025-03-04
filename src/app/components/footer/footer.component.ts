import { Component } from '@angular/core';
import { FooterInfo } from '../../models/footer-info.model';
import { FOOTER } from '../../app.config';
import { NgFor, NgIf } from '@angular/common';
import { Device } from '../../models/device.model';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [NgFor, NgIf],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  footerInfo: FooterInfo = FOOTER;

  clientsInfo: String;

  device: Device;

  constructor(deviceService: DeviceDetectorService) {
    this.clientsInfo = FOOTER.clientes.clients.map(val => val.title).join(", ");
    this.device = new Device(deviceService);
  }

  handleContact(url?: string) {
    if (url != null) {
      window.open(url, "_blanks");
    }
  }
}
