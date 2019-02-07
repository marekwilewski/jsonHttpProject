import { Injectable } from '@angular/core';
import { Client } from './client';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentClientService {

  private currentClient = new Client;
  private selectedRowIndex = new Subject<number>();
  selectedRow$ = this.selectedRowIndex.asObservable();

  constructor() {
  }

  getCurrentClient() {
    return this.currentClient;
  }

  setCurrentClient(client: Client) {
    this.currentClient = client;
  }

  addData(value: number) {
    this.selectedRowIndex.next(value);
  }

}
