import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientModelComponent } from './client-model/client-model.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { MenuComponent } from './menu/menu.component';
import { AddClientComponent } from './add-client/add-client.component';


const routes: Routes = [
  { path: 'clientList', component: ClientModelComponent },
  { path: 'edit', component: EditClientComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'add', component: AddClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]})
export class AppRoutingModule { }
