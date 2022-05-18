import { DepartamentoUpdateComponent } from './departamento/componets/crud/departamento-update/departamento-update.component';
import { DepartamentoCreateComponent } from './departamento/componets/crud/departamento-create/departamento-create.component';
import { DeleteComponent } from './hotel/componets/CRUD/delete/delete.component';
import { HotelComponent } from './hotel/componets/CRUD/reader/hotel.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './hotel/componets/CRUD/create/create.component';
import { EditComponent } from './hotel/componets/CRUD/edit/edit.component';
import { DepartamentoReadAllComponent } from './departamento/componets/crud/departamento-read-all/departamento-read-all.component';
import { TipoColaboradorCreateComponent } from './tipo-colaborador/componets/crud/tipo-colaborador-create/tipo-colaborador-create.component';

const routes: Routes = [{ path: 'hotel', loadChildren: () => import('./hotel/hotel.module').then(m => m.HotelModule) },
{ path: 'departamento', loadChildren: () => import('./departamento/departamento.module').then(m => m.DepartamentoModule) },
{ path: 'tipocolaborador', loadChildren: () => import('./tipo-colaborador/tipo-colaborador.module').then(m => m.TipoColaboradorModule) },
{ path: 'extensao', loadChildren: () => import('./extensao/extensao.module').then(m => m.ExtensaoModule) },
{ path: 'colaborador', loadChildren: () => import('./colaborador/colaborador.module').then(m => m.ColaboradorModule) },
{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: 'hotel/create',  component: CreateComponent },
{ path:'hotel/delete/:id', component: DeleteComponent},
{ path:'hotel/update/:id', component: EditComponent},
{ path: 'hotel/:id_hot/departamento', component: DepartamentoReadAllComponent },
{ path: 'tipocolaborador/create',  component: TipoColaboradorCreateComponent },
{ path: 'departamento/create',  component: DepartamentoCreateComponent },
{ path:'departamento/update/:id', component: DepartamentoUpdateComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
