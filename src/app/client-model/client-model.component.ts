import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { ClientService } from '../client.service';
import { Client, Columns } from '../client';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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
  columnsArray: Columns[] = [];
  clientsArray: Client[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate',
    'pesel', 'nip', 'genderName', 'maritalStatusName'];
  referenceColumns: string[] = ['id'];
  // referenceColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate',
  //   'pesel', 'nip', 'genderName', 'maritalStatusName'];
  timePeriods: string[];
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
    this.clientService.getColumnsOrder().subscribe(result => {
      this.columnsArray = result;
      this.referenceColumns = ['id'].concat(result.map(x => x.column));
      this.timePeriods = result.map(x => x.fullName);
      this.displayedColumns = ['id'].concat(result.filter(x => x.active !== false).map(x => x.column));
    });
  }

  ngOnInit() {
    this.clientService.getAllClients().subscribe((clients: Client[]) => {
      this.dataSource = new MatTableDataSource<Client>(clients);
      console.log(this.dataSource);
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
    this.changeColumnsOrderFlag = !this.changeColumnsOrderFlag;
  }

  checkColumnsOrder() {
    this.changeColumnsOrderFlag = false;
    this.referenceColumns = ['id'].concat(this.columnsArray
                                  .map(x => x.column));
    this.displayedColumns = ['id'].concat(this.columnsArray
                                  .filter(x => x.active !== false)
                                  .map(x => x.column));
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columnsArray, event.previousIndex, event.currentIndex);
  }
}
