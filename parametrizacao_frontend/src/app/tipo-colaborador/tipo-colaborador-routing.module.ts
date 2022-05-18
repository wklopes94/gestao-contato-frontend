import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoColaboradorComponent } from './componets/crud/tipo-colaborador-reader/tipo-colaborador.component';


const routes: Routes = [{ path: '', component: TipoColaboradorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoColaboradorRoutingModule { }
