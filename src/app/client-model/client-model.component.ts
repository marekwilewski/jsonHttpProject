import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { ClientService } from '../client.service';
import { Client, Columns } from '../client';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';




@Component({
  selector: 'app-client-model',
  templateUrl: './client-model.component.html',
  styleUrls: ['./client-model.component.css']
})
export class ClientModelComponent implements OnInit {

  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  client: Client;
  columns: Columns;
  clientsArray: Client[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate',
    'pesel', 'nip', 'genderName', 'maritalStatusName'];
  referenceColumns: string[] = [];
  // referenceColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate',
  //   'pesel', 'nip', 'genderName', 'maritalStatusName'];
  newOrderColumns: string[];
  dataSource;
  firstNameCheck = true;
  lastNameCheck = true;
  birthDateCheck = true;
  peselCheck = true;
  nipCheck = true;
  genderCheck = true;
  martialCheck = true;
  changeColumnsOrderFlag = false;

  constructor(private clientService: ClientService) {

  }

  ngOnInit() {
    this.clientService.getAllClients().subscribe((clients: Client[]) => {
      this.dataSource = new MatTableDataSource<Client>(clients);
      console.log(this.dataSource);
      this.clientService.getColumnsOrder().subscribe(result => {
        this.referenceColumns = result.map(x => x.column);
        console.log(this.referenceColumns);
      });
      // this.dataSource.sort = this.sort;
      // this.dataSource.paginator = this.paginator;
    });
  }

  OnChange($event) {
    const columnName = $event.source.name;
    if ($event.checked) {
      this.displayedColumns.splice(this.columnPosition(columnName), 0, columnName);
    } else {
      this.displayedColumns.splice(this.displayedColumns.indexOf(columnName), 1);
    }
  }

  columnPosition(column: string): number {
    let position = 0;
    for (let i = 0; i < this.referenceColumns.indexOf(column); i++) {
      if (this.displayedColumns.indexOf(this.referenceColumns[i]) >= 0) {
        position++;
      }
    }
    return position;
  }

  changeColumnsOrder() {
    this.changeColumnsOrderFlag = true;
  }
}
