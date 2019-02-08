import { NgModule } from '@angular/core';
import { MatCardModule, MatCheckboxModule, MatTableModule, MatIconModule,
        MatButtonModule, MatPaginatorModule, MatSortModule, MatFormFieldModule,
        MatDatepickerModule, MatSelectModule, MatNativeDateModule, MatInputModule
} from '@angular/material';
import { MomentDateModule } from '@angular/material-moment-adapter';

const modules = [MatCardModule, MatCheckboxModule, MatTableModule, MatIconModule, MomentDateModule,
                MatButtonModule, MatPaginatorModule, MatSortModule, MatFormFieldModule,
                MatDatepickerModule, MatSelectModule, MatNativeDateModule, MatInputModule
  ];

@NgModule({
    imports: modules,
    exports: modules,
})
export class MaterialModule { }
