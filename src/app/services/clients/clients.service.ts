import { inject, Injectable } from "@angular/core";
import { Clientes } from "../../models/clientes.model";
import { FetchService } from "../fetchServices";
import { FirestoreClientsRepository } from "../../repositories/firestore/clients/firestore-clients.repository";

@Injectable({
  providedIn: 'root'
})
export class ClientsService extends FetchService<Clientes>{

  constructor(){
    super(inject(FirestoreClientsRepository));
  }

}
