import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SheardModule } from '../sheard/sheard.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RequestResetPasswordComponent } from './request-reset-password/request-reset-password.component';
import { AdminComponent } from '../admin/admin.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  
  {path:'login',component:LoginComponent},
  {path:'ResetPassword',component:ResetPasswordComponent},
  {path:'admin',component:AdminComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SheardModule,
  ],
  declarations: [AuthComponent,LoginComponent,ResetPasswordComponent,RequestResetPasswordComponent],
})
export class AuthModule { }
