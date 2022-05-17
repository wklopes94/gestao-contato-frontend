import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradorRoutingModule } from './colaborador-routing.module';
import { ColaboradorComponent } from './colaborador.component';


@NgModule({
  declarations: [
    ColaboradorComponent
  ],
  imports: [
    CommonModule,
    ColaboradorRoutingModule
  ]
})
export class ColaboradorModule { }
