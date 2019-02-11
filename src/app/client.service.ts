import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client, GenderType, MaritalStatus, Columns, } from './client';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  client: Client;

  constructor(private http: HttpClient) {

  }

    getGenderTypes(): GenderType[] {
    return [{
      id: 1,
      name: 'Kobieta'
    },
    {
      id: 2,
      name: 'Mężczyzna'
    },
    {
      id: 3,
      name: 'Inne'
    }];
  }

  getMaritalStatuses(): MaritalStatus[] {
    return [{
      id: 1,
      name: 'Kawaler / Panna'
      },
      {
      id: 2,
      name: 'Żonaty / Zamężna'
      },
      {
      id: 3,
      name: 'Wdowiec / Wdowa'
      },
      {
      id: 4,
      name: 'Rozwiedziony / Rozwiedziona'
      }];
  }

  getClient(clientId: number) {
    return this.http.get<Client>(URL + '/clients/' + clientId);
  }

  getAllClients() {
    return this.http.get(URL + '/clients');
  }

  deleteClient(clientId: number) {
    return this.http.delete(URL + '/clients/' + clientId);
  }

  addClient(client: Client) {
    return this.http.post(URL + '/clients/' + client.id.toLocaleString(), JSON.stringify(client, null, ' '));
  }

  updateClient(client: Client) {
    return this.http.put(URL + '/clients/' + client.id.toLocaleString(), client);
  }

  getColumnsOrder(): Observable<Columns[]> {
    return this.http.get<Columns[]>('assets/columns-order.json');
  }

}
