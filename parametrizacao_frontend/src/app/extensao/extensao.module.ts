import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtensaoRoutingModule } from './extensao-routing.module';
import { ExtensaoComponent } from './extensao.component';
import { ExtensaoCreateComponent } from './componets/crud/extensao-create/extensao-create.component';
import { ExtensaoReaderComponent } from './componets/crud/extensao-reader/extensao-reader.component';
import { ExtensaoUpdateComponent } from './componets/crud/extensao-update/extensao-update.component';
import { ExtensaoDeleteComponent } from './componets/crud/extensao-delete/extensao-delete.component';


@NgModule({
  declarations: [
    ExtensaoComponent,
    ExtensaoCreateComponent,
    ExtensaoReaderComponent,
    ExtensaoUpdateComponent,
    ExtensaoDeleteComponent
  ],
  imports: [
    CommonModule,
    ExtensaoRoutingModule
  ]
})
export class ExtensaoModule { }
