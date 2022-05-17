import { DeleteComponent } from './hotel/componets/CRUD/delete/delete.component';
import { HotelComponent } from './hotel/componets/CRUD/reader/hotel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './hotel/componets/CRUD/create/create.component';
import { EditComponent } from './hotel/componets/CRUD/edit/edit.component';

const routes: Routes = [{ path: 'hotel', loadChildren: () => import('./hotel/hotel.module').then(m => m.HotelModule) },
{ path: 'departamento', loadChildren: () => import('./departamento/departamento.module').then(m => m.DepartamentoModule) },
{ path: 'tipocolaborador', loadChildren: () => import('./tipo-colaborador/tipo-colaborador.module').then(m => m.TipoColaboradorModule) },
{ path: 'extensao', loadChildren: () => import('./extensao/extensao.module').then(m => m.ExtensaoModule) },
{ path: 'tipo-colaborador', loadChildren: () => import('./tipo-colaborador/tipo-colaborador.module').then(m => m.TipoColaboradorModule) },
{ path: 'colaborador', loadChildren: () => import('./colaborador/colaborador.module').then(m => m.ColaboradorModule) },
{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: 'hotel/create',  component: CreateComponent },
{ path:'hotel/delete/:id', component: DeleteComponent},
{ path:'hotel/update/:id', component: EditComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
