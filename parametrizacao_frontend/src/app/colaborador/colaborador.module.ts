import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';

import { ColaboradorRoutingModule } from './colaborador-routing.module';
import { ColaboradorComponent } from './colaborador.component';
import { ColaboradorCreateComponent } from './componets/crud/colaborador-create/colaborador-create.component';
import { ColaboradorDeleteComponent } from './componets/crud/colaborador-delete/colaborador-delete.component';
import { ColaboradorReaderComponent } from './componets/crud/colaborador-reader/colaborador-reader.component';
import { ColaboradorUpdateComponent } from './componets/crud/colaborador-update/colaborador-update.component';


@NgModule({
  declarations: [
    ColaboradorComponent,
    ColaboradorCreateComponent,
    ColaboradorDeleteComponent,
    ColaboradorReaderComponent,
    ColaboradorUpdateComponent
  ],
  imports: [
    CommonModule,
    ColaboradorRoutingModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,

    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,




  ]
})
export class ColaboradorModule { }
