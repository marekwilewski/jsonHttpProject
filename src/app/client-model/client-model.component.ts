import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { ClientService } from '../client.service';
import { Client } from '../client';


@Component({
  selector: 'app-client-model',
  templateUrl: './client-model.component.html',
  styleUrls: ['./client-model.component.css']
})
export class ClientModelComponent implements OnInit {

  client: Client;
  clientsArray: Client[];
  // tslint:disable-next-line:no-inferrable-types
  clickFlag: boolean = false;

  constructor(private clientService: ClientService) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.clientService.getAllClients().subscribe((data: Client[]) => {
      console.log(data);
      this.clientsArray = data;
      console.log('array - ', this.clientsArray);
    });

  }

onClick() {
  this.clientService.getClient(1).subscribe((data: Client) => {
    console.log('click1 - ', data);
    this.client = data;
    console.log('click2 - ', this.client);
    this.clickFlag = true;
  });
}

}
