import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { SheardModule } from '../sheard/sheard.module';
const routes:Routes=[
  {path:'',component:UserProfileComponent},

  {path:'edit',component:UserProfileComponent},


]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SheardModule,
  ],
  declarations: [UserProfileComponent]
})
export class UserProfileModule { }
