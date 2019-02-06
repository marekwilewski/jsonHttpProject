import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-change-columns-order',
  templateUrl: './change-columns-order.component.html',
  styleUrls: ['./change-columns-order.component.css']
})
export class ChangeColumnsOrderComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getColumnsOrder();
  }

}
