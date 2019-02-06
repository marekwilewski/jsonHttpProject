import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatTableModule, MatPaginatorModule, MatDatepickerModule, MatInputModule,
    MatSelectModule, MatSortModule, MatNativeDateModule, MatMenuModule, MatIconModule,
    MatCardModule, MAT_LABEL_GLOBAL_OPTIONS, MAT_DATE_LOCALE
} from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatPaginatorModule,
        MatDatepickerModule, MatInputModule, MatSelectModule, MatSortModule, MatNativeDateModule,
        MatMenuModule, MatIconModule, MatCardModule, MatDividerModule],
    exports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatPaginatorModule,
        MatDatepickerModule, MatInputModule, MatSelectModule, MatSortModule, MatNativeDateModule,
        MatMenuModule, MatIconModule, MatCardModule, MatDividerModule],
    providers: [{ provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'auto' } },
        { provide: MAT_DATE_LOCALE, useValue: 'pl-PL' } ],
})
export class MaterialModule { }
