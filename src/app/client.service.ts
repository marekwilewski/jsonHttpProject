import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client, GenderType, MaritalStatus, } from './client';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  client: Client;

  constructor(private http: HttpClient) {

  }

  getClient(clientId: number): Observable<Client> {
    // return this.http.get<Client>(URL + '/clients/' + clientId);
    return this.http.get<Client>('http://localhost:3000/clients/2');
  }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(URL + '/clients');
  }



}
