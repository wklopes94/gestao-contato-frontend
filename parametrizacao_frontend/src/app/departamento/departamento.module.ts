import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentoRoutingModule } from './departamento-routing.module';
import { DepartamentoComponent } from './departamento.component';
import { DepartamentoReadAllComponent } from './componets/crud/departamento-read-all/departamento-read-all.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DepartamentoComponent,
    DepartamentoReadAllComponent
  ],
  imports: [
    CommonModule,
    DepartamentoRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class DepartamentoModule { }
