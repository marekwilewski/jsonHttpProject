import { Component, OnInit } from '@angular/core';
import { CurrentClientService } from '../current-client.service';
import { ClientService } from '../client.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  selectedIndex: number;

  constructor(private clientService: ClientService, private currentClientService: CurrentClientService) {
    this.currentClientService.selectedRow$.subscribe((value: number) => {
    this.selectedIndex = value;
    console.log('menu-constructor - ', this.selectedIndex);
    });
}

  ngOnInit() {
    this.selectedIndex = -1;
    console.log('menu-ngOnInit - ', this.selectedIndex);
  }

  delete() {
    this.clientService.deleteClient(this.currentClientService.getCurrentClient().id).subscribe(
      result => {
      },
      errors => {
        console.log('test', errors);
      });
        this.currentClientService.addData(-1);
        console.log('menu-delete - ', this.selectedIndex);
  }

}
