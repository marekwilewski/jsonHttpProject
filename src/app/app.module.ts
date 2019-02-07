import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import 'hammerjs';

import { MaterialModule } from './materialModule';
import { AppComponent } from './app.component';
import { ClientModelComponent } from './client-model/client-model.component';
import { ClientService } from './client.service';
import { CurrentClientService } from './current-client.service';
import { EditClientComponent } from './edit-client/edit-client.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientModelComponent,
    EditClientComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    DragDropModule,
    AppRoutingModule,
    MatMomentDateModule
  ],
  providers: [ClientService, CurrentClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
