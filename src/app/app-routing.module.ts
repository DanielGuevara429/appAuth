import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AuthDashboardGuard } from './auth-dashboard.guard';


const routes: Routes = [
    { path: 'login', component: LoginComponent,},
     { path: 'dashboard',  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) , canActivate: [AuthDashboardGuard] },
     { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
