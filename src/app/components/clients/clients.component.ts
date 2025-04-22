import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Clientes } from '../../models/clientes.model';
import { Subscription } from 'rxjs';
import { SpinnerService } from '../../services/spinner/spinner.service';
import { ClientsService } from '../../services/clients/clients.service';

@Component({
  selector: 'app-clients',
  imports: [NgFor, NgIf],
  templateUrl: './clients.component.html',
  styleUrls: [
    './_desktop_clients.component.scss',
    './_phone_clients.component.scss',
    './_tablet_clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientes?: Clientes;

  clientsInfo!: String;

  private clientService: ClientsService = inject(ClientsService);


  ngOnInit(): void {
    this.clientes = this.clientService.getData();

    this.clientsInfo = this.clientService.getData().clients.map(val => val.title).join(", ");
  }

}
