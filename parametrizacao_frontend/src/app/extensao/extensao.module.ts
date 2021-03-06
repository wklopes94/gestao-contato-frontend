import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ExtensaoRoutingModule } from './extensao-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { ExtensaoCreateComponent } from './componets/crud/extensao-create/extensao-create.component';
import { ExtensaoComponent } from './componets/crud/extensao-reader/extensao.component';
import { ExtensaoUpdateComponent } from './componets/crud/extensao-update/extensao-update.component';
import { ExtensaoDeleteComponent } from './componets/crud/extensao-delete/extensao-delete.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    ExtensaoComponent,
    ExtensaoCreateComponent,
    ExtensaoUpdateComponent,
    ExtensaoDeleteComponent,
  ],
  imports: [
    CommonModule,
    ExtensaoRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    MatInputModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule

  ]
})
export class ExtensaoModule { }
