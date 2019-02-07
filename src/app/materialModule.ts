import { NgModule } from '@angular/core';
import { MAT_LABEL_GLOBAL_OPTIONS, MAT_DATE_LOCALE,
        MatCardModule, MatCheckboxModule, MatTableModule, MatIconModule,
        MatButtonModule, MatPaginatorModule, MatSortModule, MatFormFieldModule,
        MatDatepickerModule, MatSelectModule, MatNativeDateModule
} from '@angular/material';

const modules = [MatCardModule, MatCheckboxModule, MatTableModule, MatIconModule,
                MatButtonModule, MatPaginatorModule, MatSortModule, MatFormFieldModule,
                MatDatepickerModule, MatSelectModule, MatNativeDateModule
  ];

@NgModule({
    imports: modules,
    exports: modules,
    providers: [{ provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'auto' } },
        { provide: MAT_DATE_LOCALE, useValue: 'us-US' } ],
})
export class MaterialModule { }
