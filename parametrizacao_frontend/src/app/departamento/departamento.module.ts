import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentoRoutingModule } from './departamento-routing.module';
import { DepartamentoComponent } from './departamento.component';
import { DepartamentoReadAllComponent } from './componets/crud/departamento-read-all/departamento-read-all.component';


@NgModule({
  declarations: [
    DepartamentoComponent,
    DepartamentoReadAllComponent
  ],
  imports: [
    CommonModule,
    DepartamentoRoutingModule
  ]
})
export class DepartamentoModule { }
