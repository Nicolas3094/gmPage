import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Clientes } from '../../models/clientes.model';
import { Subscription } from 'rxjs';
import { SpinnerService } from '../../services/spinner/spinner.service';
import { FirestoreClientsRepository } from '../../repositories/firestore/clients/firestore-clients.repository';

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

  private clientsRepository: FirestoreClientsRepository = inject(FirestoreClientsRepository);
  private spinnerService: SpinnerService = inject(SpinnerService);
  private sub = new Subscription();

  ngOnInit(): void {
    this.sub = this.clientsRepository.clinets$.subscribe(value => {
      this.clientes = value;
      this.clientsInfo = value.clients.map(val => val.title).join(", ");
      this.spinnerService.emitFooterLoadedDta(true);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
