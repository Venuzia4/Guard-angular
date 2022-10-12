import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { IsAdminGuard } from './is-admin.guard';
import { IsConnectedGuard } from './is-connected.guard';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'admin', component: AdminComponent, canActivate: [IsAdminGuard]
  },

  { path: 'dashboard', component: DashboardComponent, canActivate: [IsConnectedGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
