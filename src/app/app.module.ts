import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import 'hammerjs';

import { MaterialModule } from './materialModule';
import { AppComponent } from './app.component';
import { ClientModelComponent } from './client-model/client-model.component';
import { ClientService } from './client.service';
import { ChangeColumnsOrderComponent } from './change-columns-order/change-columns-order.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientModelComponent,
    ChangeColumnsOrderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    DragDropModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
