import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Clientes } from '../../models/clientes.model';
import { ClientsService } from '../../services/clients.service';
import { Subscription } from 'rxjs';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-clients',
  imports: [NgFor, NgIf],
  templateUrl: './clients.component.html',
  styleUrls: [
    './_desktop_clients.component.scss',
    './_phone_clients.component.scss',
    './_tablet_clients.component.scss']
})
export class ClientsComponent implements OnInit, OnDestroy {

  clientes?: Clientes;
  clientsInfo!: String;

  private clientsService: ClientsService = inject(ClientsService);
  private spinnerService: SpinnerService = inject(SpinnerService);
  private sub = new Subscription();

  ngOnInit(): void {
    this.sub = this.clientsService.clinets$.subscribe(value => {
      this.clientes = value;
      this.clientsInfo = value.clients.map(val => val.title).join(", ");
      this.spinnerService.emitFooterLoadedDta(true);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
