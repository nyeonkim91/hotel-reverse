import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { Client } from './client';
import { ClientDetailsComponent } from './client-details.component';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'clients-list',
  directives: [ClientDetailsComponent, ROUTER_DIRECTIVES],
  templateUrl: './app/template/clients.html',
})

export class ClientsComponent implements OnInit{
  clients: Client[] = [];
  selectedClient: Client;

  constructor(private clientsService : ClientsService){ }

  ngOnInit(){
    this.clientsService
      .getAllClients()
      .subscribe(
        h => this.clients = h,
        error => console.error('Error: ' + error),
        () => console.log('Successfully fetched Clients data!')
      );
  }

  selectClient(client: Client){
    this.selectedClient = client;
  }
}
