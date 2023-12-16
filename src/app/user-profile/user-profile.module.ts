import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { SheardModule } from '../sheard/sheard.module';
import { EditComponent } from './edit/edit.component';

const routes:Routes=[
  {path:'',component:UserProfileComponent},
  {path:'edit',component:EditComponent},




]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SheardModule,
    
  ],
  declarations: [UserProfileComponent, EditComponent]
})
export class UserProfileModule { }
