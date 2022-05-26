import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
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
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';

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
    MatInputModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule
  ]
})
export class TipoColaboradorModule { }
