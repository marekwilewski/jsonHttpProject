import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ClientService } from '../client.service';
import { PeselSumValidator } from '../pesel-SumCheck-Validator';
import { NipSumValidator } from '../nip-SumCheck-Validator';
import { GenderType, MaritalStatus, Client } from '../client';
import * as moment from 'moment';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client;
  clientForm: FormGroup;
  genders: GenderType[];
  martialStatuses: MaritalStatus[];

  constructor(private clientService: ClientService, private formBuilder: FormBuilder) {
    this.clientForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[A-ZŚŁŻŹa-z ąćęłńóżź]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[A-Za-z ąćęłńóżźŚ.-]+$')]],
      birthDate: moment().format('YYYY-MM-DD'),
      pesel: ['', [Validators.minLength(11), PeselSumValidator.peselSumValidator]],
      nip: ['', [Validators.minLength(10), NipSumValidator.nipSumValidator]],
      genderType: new GenderType,
      martialStatusType: new MaritalStatus
    });
  }

  ngOnInit() {
    this.genders = this.clientService.getGenderTypes();
    this.martialStatuses = this.clientService.getMaritalStatuses();
    this.clientForm.setValue({ firstName: '', lastName: '', pesel: '', nip: '', birthDate: '',
    genderType: '', martialStatusType: '' });
  }

  numberOnly(event): boolean {
    const charCode = event.which;
    if (charCode > 47 && charCode < 58 || charCode > 45 && charCode < 47) {
      return true;
    }
    return false;
  }

  letterOnly(event): boolean {
    const charCode = event.which;
    if (((charCode > 38 && charCode !== 40 && charCode !== 41 && charCode !== 42
      && charCode !== 43 && charCode !== 44) || charCode === 32)
      && (charCode < 48 || (charCode > 57 && charCode !== 64))) {
      return true;
    }
    return false;
  }

  onSubmit() {
    console.log('clientForm', this.clientForm);
    this.client = this.clientForm.value;
    this.client.birthDate = new Date(this.clientForm.value.birthDate.format('YYYY-MM-DD'));
    console.log('client', this.client);

    const date = new Date('1963-02-11');
    console.log(date);
    switch (this.clientForm.value.genderType) {
      case 1: {
        this.client.gender = { id: 1, name: 'Kobieta' };
        break;
      }
      case 2: {
        this.client.gender = { id: 2, name: 'Mężczyzna' };
        break;
      }
      default: {
        this.client.gender = { id: 3, name: 'Inne' };
      }
    }
    switch (this.clientForm.value.maritalStatusType) {
      case 1: {
        this.client.maritalStatus = { id: 1, name: 'Kawaler / Panna' };
        break;
      }
      case 2: {
        this.client.maritalStatus = { id: 2, name: 'Żonaty / Zamężna' };
        break;
      }
      case 3: {
        this.client.maritalStatus = { id: 3, name: 'Wdowiec / Wdowa' };
        break;
      }
      case 4: {
        this.client.maritalStatus = { id: 4, name: 'Rozwiedziony / Rozwiedziona' };
        break;
      }
      default: {
        this.client.maritalStatus = { id: 5, name: 'Inne' };
      }
    }
    console.log('JSON client', JSON.stringify(this.client, null, ' '));
    // this.clientService.addClient(this.client).subscribe(result => console.log(result));
  }

}
