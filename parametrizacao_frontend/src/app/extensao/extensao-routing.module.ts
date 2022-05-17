import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtensaoComponent } from './extensao.component';

const routes: Routes = [{ path: '', component: ExtensaoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtensaoRoutingModule { }
