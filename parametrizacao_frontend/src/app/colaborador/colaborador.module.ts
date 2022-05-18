import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    ColaboradorRoutingModule
  ]
})
export class ColaboradorModule { }
