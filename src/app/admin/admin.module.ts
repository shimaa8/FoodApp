import { AdminComponent } from '../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheardModule } from '../sheard/sheard.module';
import { Router } from '@angular/router';

@NgModule({
  
  imports: [
    AdminComponent,
    CommonModule,
    SheardModule,
  ],
  declarations: [AdminComponent]
})
export class AdminModule {
  constructor(private router:Router){
    this.router.navigate(['/auth/admin'])
  }
  
 }


