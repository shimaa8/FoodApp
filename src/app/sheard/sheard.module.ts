import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheardComponent } from './sheard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  imports:[
    CommonModule,
    MatButtonModule, MatDividerModule, MatIconModule,HttpClientModule,FormsModule,MatSidenavModule,ReactiveFormsModule
    ,MatDialogModule],
  declarations: [SheardComponent],

  exports:[ MatButtonModule, MatDividerModule, MatIconModule,MatSidenavModule,HttpClientModule,ReactiveFormsModule,MatDialogModule,FormsModule
  ]
})
export class SheardModule { }
