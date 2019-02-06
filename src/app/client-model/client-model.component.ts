import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { ClientService } from '../client.service';
import { Client } from '../client';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-client-model',
  templateUrl: './client-model.component.html',
  styleUrls: ['./client-model.component.css']
})
export class ClientModelComponent implements OnInit {

  client: Client;
  clientsArray;

  constructor(private clientService: ClientService) {

  }

  ngOnInit() {
    console.log(this.clientService.getClient(2));
    //  this.clientsArray = this.clientService.getAllClients().pipe(map(response => response.json()));
    // this.clientService.getAllClients().subscribe(clients =>
    //   this.clientsArray = clients
    // );
    // console.log('array', this.clientsArray);
  }
}
