import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HotelRoutingModule } from './hotel-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { HotelComponent } from './componets/CRUD/reader/hotel.component';
import { CreateComponent } from './componets/CRUD/create/create.component';
import { DeleteComponent } from './componets/CRUD/delete/delete.component';
import { EditComponent } from './componets/CRUD/edit/edit.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HotelComponent,
    CreateComponent,
    DeleteComponent,
    EditComponent,


  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSelectModule,
    MatSortModule,
    ReactiveFormsModule,
    MatIconModule



  ]
})
export class HotelModule { }
