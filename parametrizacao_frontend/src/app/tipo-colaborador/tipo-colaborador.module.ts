import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoColaboradorRoutingModule } from './tipo-colaborador-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {TipoColaboradorComponent } from './componets/crud/tipo-colaborador-reader/tipo-colaborador.component';
import { TipoColaboradorDeleteComponent } from './componets/crud/tipo-colaborador-delete/tipo-colaborador-delete.component';
import { TipoColaboradorUpdateComponent } from './componets/crud/tipo-colaborador-update/tipo-colaborador-update.component';
import { TipoColaboradorCreateComponent } from './componets/crud/tipo-colaborador-create/tipo-colaborador-create.component';


@NgModule({
  declarations: [
    TipoColaboradorComponent,

    TipoColaboradorDeleteComponent,
    TipoColaboradorUpdateComponent,
    TipoColaboradorCreateComponent
  ],
  imports: [
    CommonModule,
    TipoColaboradorRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    MatInputModule
  ]
})
export class TipoColaboradorModule { }
