import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoColaboradorRoutingModule } from './tipo-colaborador-routing.module';
import { TipoColaboradorComponent } from './tipo-colaborador.component';


@NgModule({
  declarations: [
    TipoColaboradorComponent
  ],
  imports: [
    CommonModule,
    TipoColaboradorRoutingModule
  ]
})
export class TipoColaboradorModule { }
