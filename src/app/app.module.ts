import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientModelComponent } from './client-model/client-model.component';
import { ClientService } from './client.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientModelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
