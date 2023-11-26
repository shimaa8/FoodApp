import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangepasswordComponent } from './changepassword.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path:'',component:ChangepasswordComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  declarations: [ChangepasswordComponent]
})
export class ChangepasswordModule { }
