import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtensaoRoutingModule } from './extensao-routing.module';
import { ExtensaoComponent } from './extensao.component';


@NgModule({
  declarations: [
    ExtensaoComponent
  ],
  imports: [
    CommonModule,
    ExtensaoRoutingModule
  ]
})
export class ExtensaoModule { }
