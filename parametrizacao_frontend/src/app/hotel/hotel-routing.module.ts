

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './componets/CRUD/reader/hotel.component';
import {MatPaginatorModule} from '@angular/material/paginator';


const routes: Routes = [{ path: '', component: HotelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
