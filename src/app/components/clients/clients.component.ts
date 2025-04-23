import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Clientes } from '../../models/clientes.model';
import { ClientsService } from '../../services/clients/clients.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-clients',
  imports: [NgFor, NgIf, AsyncPipe],
  templateUrl: './clients.component.html',
  styleUrls: [
    './_desktop_clients.component.scss',
    './_phone_clients.component.scss',
    './_tablet_clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientes$ !: Observable<Clientes>;

  clientsInfo!: String;

  private clientService: ClientsService = inject(ClientsService);


  ngOnInit(): void {
    this.clientes$ = this.clientService.data$.pipe(
      tap(value => {
        this.clientsInfo = value.clients.map(val => val.title).join(", ");
      })
    );
  }

}
