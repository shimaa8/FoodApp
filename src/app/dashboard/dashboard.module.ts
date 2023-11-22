import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SheardModule } from '../sheard/sheard.module';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../Guards/admin.guard';
import {UserGuard}  from '../Guards/user.guard';
import { HomeComponent } from '../sheard/home/home.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';

      const  routes:Routes=[
        {path:'',component:DashboardComponent,children:
        [
          {path:'',redirectTo:'Home',pathMatch:'full'},
          {path:'home',component:HomeComponent},
          {path:'admin',canActivate:[AdminGuard], loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) },
           {path:'changePassword',component:ChangePasswordComponent},
          {path:'user',canActivate:[UserGuard], loadChildren: () => import('../user/user.module').then(m => m.UserModule)},
          {path:'home',component:HomeComponent},

        ],
      }
         ]

@NgModule({
  imports: [
    CommonModule,
    SheardModule,
    RouterModule.forChild(routes),
    SheardModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
