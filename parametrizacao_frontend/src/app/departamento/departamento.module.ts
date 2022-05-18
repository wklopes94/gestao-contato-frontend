import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { DepartamentoRoutingModule } from './departamento-routing.module';

import { DepartamentoReadAllComponent } from './componets/crud/departamento-read-all/departamento-read-all.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DepartamentoCreateComponent } from './componets/crud/departamento-create/departamento-create.component';
import { DepartamentoDeleteComponent } from './componets/crud/departamento-delete/departamento-delete.component';
import { DepartamentoUpdateComponent } from './componets/crud/departamento-update/departamento-update.component';
import { DepartamentoComponent } from './componets/crud/departamento-reader/departamento.component';


@NgModule({
  declarations: [
    DepartamentoComponent,
    DepartamentoReadAllComponent,
    DepartamentoCreateComponent,
    DepartamentoDeleteComponent,
    DepartamentoUpdateComponent,
    DepartamentoComponent
  ],
  imports: [
    CommonModule,
    DepartamentoRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    MatInputModule
  ]
})
export class DepartamentoModule { }
