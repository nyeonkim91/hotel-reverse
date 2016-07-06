import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams, Router} from 'angular2/router';
import { Response } from 'angular2/http';

import { ClientsService } from '../services/clients.service';
import { Client } from './client';

@Component({
  selector: 'client-details',
  templateUrl: './app/template/client-details.html',
})

export class ClientDetailsComponent implements OnInit {
  @Input() client : Client;

  constructor(private clientsService: ClientsService,
              private routeParams: RouteParams,
              private router: Router) {
  }

  ngOnInit() {
    let client_Email = this.routeParams.get('client_Email');

    console.log('getting client with client_Email: ', client_Email);

    this.clientsService
      .getClient(client_Email)
      .subscribe(
        c => this.client = c,
        error => console.error('Error: ' + error),
        () => console.log('Successfully fetched a Client data!')
      );
  }

  gotoClientsList() {
    let link = ['Clients'];
    this.router.navigate(link);
  }
}
