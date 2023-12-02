import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangepasswordComponent } from './changepassword.component';
import { RouterModule, Routes } from '@angular/router';
import { SheardModule } from 'src/app/sheard/sheard.module';

const routes:Routes=[
  {
    path:'',component:ChangepasswordComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SheardModule

  ],
  declarations: [ChangepasswordComponent]
})
export class ChangepasswordModule { }
