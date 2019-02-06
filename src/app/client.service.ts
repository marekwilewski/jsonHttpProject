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

  getClient(clientId: number) {
    return this.http.get<Client>(URL + '/clients/' + clientId);
  }

  getAllClients() {
    return this.http.get(URL + '/clients');
  }



}
