import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import 'hammerjs';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_LABEL_GLOBAL_OPTIONS, MAT_DATE_LOCALE,
  DateAdapter, MAT_DATE_FORMATS} from '@angular/material';

import { MaterialModule } from './materialModule';
import { AppComponent } from './app.component';
import { ClientModelComponent } from './client-model/client-model.component';
import { ClientService } from './client.service';
import { CurrentClientService } from './current-client.service';
import { EditClientComponent } from './edit-client/edit-client.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { AddClientComponent } from './add-client/add-client.component';

export const DateFormat = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY-MM-DD',
    dateA11yLabel: 'YYYY-MM-DD',
    monthYearA11yLabel: 'YYYY-MM-DD',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    ClientModelComponent,
    EditClientComponent,
    MenuComponent,
    AddClientComponent
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
  providers: [ClientService, CurrentClientService,
  {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'auto' }},
  {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  {provide: MAT_DATE_FORMATS, useValue: DateFormat},
],
  bootstrap: [AppComponent]
})
export class AppModule { }
