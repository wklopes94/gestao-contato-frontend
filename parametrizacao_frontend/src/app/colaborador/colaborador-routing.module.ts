import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradorComponent } from './colaborador.component';
import { ColaboradorReaderComponent } from './componets/crud/colaborador-reader/colaborador-reader.component';

const routes: Routes = [{ path: '', component: ColaboradorReaderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaboradorRoutingModule { }
