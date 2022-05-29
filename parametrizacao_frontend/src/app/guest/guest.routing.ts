import { GuestComponent } from './guest.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   { path: 'guest', component: GuestComponent} ,
];

export const GuestRoutes = RouterModule.forRoot(routes);
